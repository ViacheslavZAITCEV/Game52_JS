// declare module app {
import { Pil } from './Pil/index.mjs'

const VALEURS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Reine', 'Roi', 'As']
const COLEURS = ['trèfle', 'pique', 'coeur', 'carreau']

var pil = new Pil(VALEURS, COLEURS)



// console.log(pil)

console.log(' \n Pile entier:')
pil.pil.forEach(carte => console.log(carte.toString()))

console.log('22=', pil.pil[22].toString())
console.log('51=', pil.pil[51].toString())



// }