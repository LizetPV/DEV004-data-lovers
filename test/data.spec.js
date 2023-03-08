import { filter, ordenar } from '../src/data.js';

describe('filtrar los tipos de pokemones de agua', () => {
  it('is a function', () => {
    const filterWater = function filter(option, data){
      return data.filter((poke) => poke.type.includes(option));
    }
    expect(typeof example).toBe('function');
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

function expect(result) {
  return {
    toBe(expected) {
      if(result !== expected) {
        throw new Error(`${result} is not equal a ${expected} 😕`)
      }
    }
  }
}