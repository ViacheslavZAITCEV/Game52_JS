export default class Carte {

	// valeur: string;
	// couleur: string;

	constructor(valeur, couleur, seniority) {
		this.valeur = valeur;
		this.couleur = couleur;
		this.seniority = seniority;
	}

	toString() {
		return this.valeur + ' de ' + this.couleur
	}
}
