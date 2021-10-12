VALEURS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Reine', 'Roi', 'As']
COLEURS = ['trèfle', 'pique', 'coeur', 'carreau']

class Carte {
	constructor(valeur, coleur) {
		this.valeur = valeur;
		this.coleur = coleur;
	}

	toString() {
		return this.valeur + ' de ' + this.coleur
	}
}



class Pil {
	constructor() {
		this.pil = []
		this.newPil()
		this.mixerPil()
	}
	VALEURS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Reine', 'Roi', 'As']
	COLEURS = ['trèfle', 'pique', 'coeur', 'carreau']

	newPil() {
		for (var i = 0; i < 13; i++) {
			for (var j = 0; j < 4; j++) {
				this.pil.push(new Carte(this.VALEURS[i], this.COLEURS[j]))
			}
		}
	}

	mixerPil() {
		var pilmix = [];
		const pilLength = this.pil.length
		for (var i = 0; i < pilLength; i++) {
			var random = Math.random() * this.pil.length;
			pilmix.push(this.pil[parseInt(random)])
			this.pil.splice(random, 1)
		}
		this.pil = pilmix;
	}

}

var pil = new Pil()
console.log(pil.pil.length)


console.log('22=', pil.pil[22].toString())
console.log('51=', pil.pil[51].toString())
