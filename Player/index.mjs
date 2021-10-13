export class Player {


	constructor(name) {
		this.cards = []
		this.name = name
	}

	getCard() {
		let card = this.cards[0];
		this.cards.shift();
		return card
	}

	addCard(cards) {
		// console.log(this.name, 'a ', this.cards.length, 'cards')
		// console.log(this.cards)
		this.cards.push(...cards)
		console.log(this.name, 'prend les cartes: ', ...cards.map(c => c.toString() + ', '), '. En total', this.name == 'Katty' ? 'elle' : 'il', 'a ', this.cards.length, 'cards')
		// console.log(this.cards)
	}


}