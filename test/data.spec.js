//import { example, anotherExample } from '../src/data.js';
import { filter, ordenar, pokemonesPromedio } from "../src/data.js";
// Pruebas unitarias para el "filter"
describe("Filter", () => {
  //1° criterio para las pruebas: la función existe
  it("filter deberia ser una funcion", () => {
    expect(typeof filter).toBe("function");
  });
  //2° criterio para las pruebas: validar el comportamiento deseado de la funcion
  const data = [
    {
      num: "001",
      name: "bulbasaur",
      type: ["grass", "poison"],
    },
    {
      num: "002",
      name: "ivysaur",
      type: ["grass", "poison"],
    },
    {
      num: "003",
      name: "venusaur",
      type: ["grass", "poison"],
    },
    {
      num: "004",
      name: "charmander",
      type: ["fire"],
    },
    {
      num: "005",
      name: "charmeleon",
      type: ["fire"],
    },
  ];
  it("filter deberia filtra por tipo", () => {
    expect(filter("grass", data)).toStrictEqual([
      { num: "001", name: "bulbasaur", type: ["grass", "poison"] },
      { num: "002", name: "ivysaur", type: ["grass", "poison"] },
      { num: "003", name: "venusaur", type: ["grass", "poison"] },
    ]);
  });
  //3° criterio para las pruebas: estresar la función
  it("filter deberia retornar algo", () => {
    // expect(filter('', data)).toBe(false)
    expect(filter("", data)).toBeFalsy();
    expect(filter("water", [])).toBeFalsy();
  });
});

describe("Ordenar", () => {
  // funcion existe
  it("Ordenar los pokemones alfabéticamente Ascendente", () => {
    expect(typeof ordenar).toBe("function");
  });
  // comportamiento deseado de la funcion
  const dataPokemon = [
    { name: "venusaur" },
    { name: "ivysaur" },
    { name: "charmeleon" },
    { name: "charmander" },
    { name: "bulbasaur" },
  ];
  it("ordenar deberia organizar a los pokemones de forma ascendente", () => {
    expect(ordenar("nameAsc", dataPokemon)).toStrictEqual([
      { name: "bulbasaur" },
      { name: "charmander" },
      { name: "charmeleon" },
      { name: "ivysaur" },
      { name: "venusaur" },
    ]);
  });
  it("ordenar deberia organizar a los pokemones de forma ascendente", () => {
    expect(ordenar("name", dataPokemon)).toStrictEqual([
      { name: "venusaur" },
      { name: "ivysaur" },
      { name: "charmeleon" },
      { name: "charmander" },
      { name: "bulbasaur" },
    ]);
  });
  it("Ordenar deberia retornar algo", () => {
    // estrese la funcion
    // expect(filter('', data)).toBe(false)
    expect(ordenar("", dataPokemon)).toBeFalsy();
    expect(ordenar("water", [])).toBeFalsy();
  });
});

describe("pokemonesPromedio", () => {
  const data = [
    {
      stats: {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
      },
    },
    {
      stats: {
        "base-attack": "151",
        "base-defense": "143",
        "base-stamina": "155",
      },
    },
    {
      stats: {
        "base-attack": "198",
        "base-defense": "189",
        "base-stamina": "190",
      },
    },
  ];
  const resultadoEsperado = [
    {
      power: 192,
      stats: {
        "base-attack": "198",
        "base-defense": "189",
        "base-stamina": "190",
      },
    },
    {
      power: 150,
      stats: {
        "base-attack": "151",
        "base-defense": "143",
        "base-stamina": "155",
      },
    },
    {
      power: 119,
      stats: {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
      },
    },
  ];
  it("pokemonesPromedio deberia ser una funcion", () => {
    expect(typeof pokemonesPromedio).toBe("function");
  });
  it("Deberia retornar los promedios y ordena los pokemones", () => {
    expect(pokemonesPromedio(data)).toStrictEqual(resultadoEsperado);
  });
});
