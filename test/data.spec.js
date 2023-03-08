//import { example, anotherExample } from '../src/data.js';
import { filter, ordenar } from "../src/data.js";


// Pruebas unitarias para el "filter"
describe('Filter', () => {
  //1° criterio para las pruebas: la función existe
  it('filter deberia ser una funcion', () => {
    expect(typeof filter).toBe('function')
  })
  //2° criterio para las pruebas: validar el comportamiento deseado de la funcion
  const data = [{
    "num": "001",
    "name": "bulbasaur",
    "type": [
      "grass",
      "poison"
    ],
  },
  {
    "num": "002",
    "name": "ivysaur",
    "type": [
      "grass",
      "poison"
    ],
  },
  {
    "num": "003",
    "name": "venusaur",
    "type": [
      "grass",
      "poison"
    ],
  },
  {
    "num": "004",
    "name": "charmander",
    "type": [
      "fire"
    ],
  },
  {
    "num": "005",
    "name": "charmeleon",
    "type": [
      "fire"
    ],
  }]
  it('filter deberia filtra por tipo', () => {
    expect(filter('grass', data)).toStrictEqual([
      { num: '001', name: 'bulbasaur', type: ['grass', 'poison'] },
      { num: '002', name: 'ivysaur', type: ['grass', 'poison'] },
      { num: '003', name: 'venusaur', type: ['grass', 'poison'] }
    ])
  })
  //3° criterio para las pruebas: estresar la función
  it('filter deberia retornar algo', () => {
    // expect(filter('', data)).toBe(false)
    expect(filter('', data)).toBeFalsy()
    expect(filter('water', [])).toBeFalsy()
  })

});



// Pruebas unitarias para "ordenar"
describe('Ordenar', () => {
  // funcion existe
  it('Ordenar los pokemones alfabéticamente Ascendente', () => {
    expect(typeof ordenar).toBe('function')
  })
  // comportamiento deseado de la funcion
  const dataOrdenar = [
    { 'name': 'venusaur' },
    { 'name': 'ivysaur' },
    { 'name': 'charmeleon' },
    { 'name': 'charmander' },
    { 'name': 'bulbasaur' }]

  it.only('ordenar deberia organizar a los pokemones de forma ascendente', () => {
    expect(ordenar('name', dataOrdenar)).toStrictEqual([
      { 'name': 'venusaur' },
      { 'name': 'ivysaur' },
      { 'name': 'charmeleon' },
      { 'name': 'charmander' },
      { 'name': 'bulbasaur' }])
  })
  // estrese la funcion
  it('ordenar deberia retornar algo', () => {
    // expect(filter('', data)).toBe(false)
    expect(ordenar('', dataOrdenar)).toBeFalsy()
    expect(ordenar('venusaur', [])).toBeFalsy()
  })
})

