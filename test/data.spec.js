//import { example, anotherExample } from '../src/data.js';
import { filter,ordenar} from "../src/data.js";


describe('el boton ordenar, filtre correctamente de ascendente a descendente', () => {
  it('filter', () => {
    const testFilter = function (){
      return true
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
