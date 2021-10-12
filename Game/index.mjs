export class Game {
	constructor() {

	}


	comparaison(carte1, carte2) {
		let res = 0;
		if (carte1.valeur > carte2.valeur) res = 1;
		if (carte1.valeur < carte2.valeur) res = -1;
		return res;
	}


}