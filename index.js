// declare module app {
// import { Pil } from './Pil/index.mjs'
import { Game } from './Game/index.mjs'

// const VALEURS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Valet', 'Reine', 'Roi', 'As']
// const COLEURS = ['trèfle', 'pique', 'coeur', 'carreau']

const PLAYERS = ['John', 'Robert', 'Max', 'Katty']


// var pil = new Pil(VALEURS, COLEURS)



// console.log(pil)

// console.log(' \n Pile entier:')
// pil.pil.forEach(carte => console.log(carte.toString()))

const game = new Game(PLAYERS)
console.log(' \n Joueurs:')
// console.log(game.cards)
console.log(PLAYERS.forEach(p => p))


console.log(' \n DISTRIBUTION \n')
const res = game.distributionAllCrds()
// console.log('res', res)
// console.log(game.cards)
// console.log(game.players)

for (var i = 0; i < 13; i++) {

	game.tour()
}

game.players.forEach(player => {
	console.log(player.name, ' a ', player.cards.length, ' cards')
});








// console.log('22=', pil.pil[22].toString())
// console.log('51=', pil.pil[51].toString())



// }