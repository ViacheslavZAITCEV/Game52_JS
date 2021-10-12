import Carte from '../Carte/index.mjs'


export class Pil {

	constructor(valeur, couleur) {
		this.pil = this.newPil(valeur, couleur)
		this.mixerPil()
	}

	newPil(valeur, couleur) {
		let newPile = [];
		for (var i = 0; i < valeur.length; i++) {
			for (var j = 0; j < couleur.length; j++) {
				newPile.push(new Carte(valeur[i], couleur[j]))
			}
		}
		return newPile
	}

	mixerPil() {
		let pilmix = [];
		const pilLength = this.pil.length
		for (var i = 0; i < pilLength; i++) {
			var random = parseInt(Math.random() * this.pil.length);

			pilmix.push(this.pil[random])
			this.pil.splice(random, 1)
		}
		this.pil = pilmix;
	}

	getPil() {
		return this.pil
	}

	// typePil() {
	// 	return this.pil.forEach(carte => carte.toString());
	// }

}
