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



}