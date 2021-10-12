export default class Carte {

	// valeur: string;
	// couleur: string;

	constructor(valeur, couleur) {
		this.valeur = valeur;
		this.couleur = couleur;
	}

	toString() {
		return this.valeur + ' de ' + this.couleur
	}
}
