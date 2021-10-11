import types from './types'
import Carte from './Carte'


interface Pile {
	newPil: () => void;
	mixerPil: () => void;
	getPil: () => [Carte];
}

class Pil {
	constructor() {
		this.pil: [Carte] = []
		this.newPil()
		this.mixerPil()
	}
	// pil: [Carte] = []
	VALEURS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Reine', 'Roi', 'As']
	COLEURS = ['trèfle', 'pique', 'coeur', 'carreau']

	newPil() {
		for (var i = 0; i < 12; i++) {
			for (var j = 0; j < 3; j++) {
				this.pil.push(new Carte(this.VALEURS[i], this.COLEURS[j]))
			}
		}
	}

	mixerPil() {
		let pilmix = [];
		for (var i = 0; i < this.pil.length; i++) {
			var random = Math.random() * this.pil.length;
			pilmix.push(this.pil[random])
			this.pil.splice(random, 1)
		}
		this.pil = pilmix;
	}

	getPil() {
		return this.pil
	}

}

export default Pil