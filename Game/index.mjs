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
			// console.log('j=', j, '  carte:', carte.toString());

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
			return player.getCard()
		})
		// console.log('cardsPli=', cardsPli)
		return cardsPli
	}

	majeurOfPli(cardsPli) {
		if (cardsPli.length < 2) return false

		let max = 0; //index of card in Pli
		let equals = [];
		for (var i = 1; i < cardsPli.length; i++) {
			const compare = this.comparaison(cardsPli[max], cardsPli[i])
			// console.log(' i=', i, ', max=', max)
			// console.log('cardsPli[max]=', cardsPli[max])
			// console.log('cardsPli[i]=', cardsPli[i])
			// console.log('compare=', compare, '\n')
			if (compare < 0) {
				max = i
				equals = []
			} else if (compare == 0) {
				if (equals.length == 0) equals.push(max)
				equals.push(i)
			}
		}

		let response = {
			status: equals.length > 0 ? 'equals' : 'solo',
			vanqueur: equals.length > 0 ? equals : max,
			pli: cardsPli
		}

		return response
	}


	/*
	compare two cards function
	the comparison does not consider the color of the cards
	card seniority: 	2 < 3 < 4  < 5 < 6 < 7 < 8 < 9 < 10 < Valet < Reine < Roi < As
	
	@Params (arg1: Carte, arg2: Carte)
	return 0 if equal
	return 1 if arg1 is older
	return -1 if arg2 is older

	*/
	comparaison(carte1, carte2) {
		if (carte1.seniority > carte2.seniority) return 1;
		if (carte1.seniority < carte2.seniority) return -1;
		return 0;
	}


	getPli() {
		return this.majeurOfPli(this.pli())
	}



	tour() {
		const tour = this.getPli()
		if (tour.status == 'solo') {
			this.players[tour.vanqueur].addCard(tour.pli)
		} else if (tour.status == 'equals') {
			const vanqueur = getVanqueurFromEquals(tour.vanqueur)
			this.players[vanqueur].addCard(tour.pli)
		}

		function getVanqueurFromEquals(players) {
			return parseInt(Math.random() * players.length)
		}
		// console.log('\n')
	}
}