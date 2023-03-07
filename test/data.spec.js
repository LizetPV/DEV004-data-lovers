<<<<<<< HEAD
import { filter, ordenar } from '../src/data.js';

/*
describe('example', () => {
  it('is a function', () => {
    const example = function (){
      return null
=======
//import { example, anotherExample } from '../src/data.js';
import { filter,ordenar} from "../src/data.js";


describe('el boton ordenar, filtre correctamente de ascendente a descendente', () => {
  it('filter', () => {
    const testFilter = function (){
      return true
>>>>>>> cbfca28c479ca3d017c619d9bd45a785f95b23a9
    }
    expect(mostrarData.filter).toBe(Option.type);
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/


function filter(option, data) {
  return {
    toBe(data.filter((poke) => poke.type.includes(option))) {
      if(result !== expected) {
        throw new Error(`${result} is not equal a ${expected} 😕`)
      }
    }
  }
}