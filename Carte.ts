import types from './types'

export default class Carte {
	constructor(valeur: string, couleur: string) {
		this.valeur = valeur;
		this.couleur = couleur;
	}

	toString() {
		return this.valeur + ' de ' + this.couleur
	}
}
