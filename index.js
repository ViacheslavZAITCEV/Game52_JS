// declare module app {
import { Pil } from './Pil/index.mjs'



var pil = new Pil()

console.log(pil)
console.log(pil.getPil())
console.log(pil.getPil().length)

console.log('22=', pil.pil[22].toString())
console.log('51=', pil.pil[51].toString())


// }