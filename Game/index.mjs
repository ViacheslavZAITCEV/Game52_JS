import { Player } from '../Player/index.mjs'
import { Cards } from '../Pil/index.mjs'

export class Game {
	VALEURS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Reine', 'Roi', 'As']
	COLEURS = ['trèfle', 'pique', 'coeur', 'carreau']


	constructor(players) {

		this.cards = new Cards(this.VALEURS, this.COLEURS)
		this.players = []
		players?.forEach(player => this.players.push(new Player(player)))
	}



	/*
	compare two cards function
	the comparison does not consider the color of the cards
	card seniority: 
	2 < 3 < 4  < 5 < 6 < 7 < 8 < 9 < 10 < Valet < Reine < Roi < As
	
	return 0 if equal
	return 1 if arg1 is older
	return -1 if arg2 is older

	*/
	comparaison(carte1, carte2) {
		if (carte1.seniority > carte2.seniority) return 1;
		if (carte1.seniority < carte2.seniority) return -1;
		return 0;
	}


	/*
distribution of cards between players
arg1 = array (card)
arg2 = array (player)
Returns false if the number of cards is not shared between the players
	*/
	distributionAllCrds() {
		if (this.cards.pil.length % this.players.length !== 0) return false

		let j = 0;
		let cardsLength = this.cards.pil.length

		while (cardsLength > 0) {

			const carte = this.cards.getCard();
			this.players[j].cards.push(carte);
			console.log('j=', j, '  carte:', carte.toString());

			j++;
			if (j >= this.players.length) j = 0;

			cardsLength--;
		}

		return true
	}

	/*
	@return Array {player:string, card: Card}
	*/
	pli() {
		const cardsPli = this.players.map(player => {
			return {
				player: player.name,
				card: player.getCard()
			}
		})
		console.log('cardsPli=', cardsPli)
		return cardsPli
	}

	majeurOfPli(cardsPli) {
		if (cardsPli.length < 2) return false

		let max = cardsPli[0].card;
		let equals = [];
		for (var i = 0; i < cardsPli.length - 1; i++) {
			const compare = this.comparaison(cardsPli[i].card, cardsPli[i + 1].card)

			if (compare < 0) {
				max = cardsPli[i + 1]
				equals = []

			} else if (compare == 0) {
				if (equals.length == 0) equals.push(cardsPli[i])
				equals.push(cardsPli[i + 1])
			}
		}

		return equals.length > 0 ? equals : max
	}

	getPli() {
		return this.majeurOfPli(this.pli())
	}

}