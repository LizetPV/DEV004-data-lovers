<<<<<<< HEAD
import dataPokemon from "./data/pokemon/pokemon.js";

import { filter, ordenar } from "./data.js";


const data = dataPokemon.pokemon;

const divTarjeta = document.getElementById("dataHtml");
const botonesHeader = document.querySelectorAll(".btn-header");
const mostrarData = (pokemones) => {
  divTarjeta.innerHTML = "";
  pokemones.forEach((pokemon) => {
    const card = document.createElement("div");
    const name = document.createElement("name");
    name.innerHTML = pokemon.name;
    const numbers = document.createElement("h1");
    numbers.innerHTML = pokemon.num;
    const type = document.createElement("type");
    type.innerHTML = pokemon.type;
    const image = document.createElement("img"); 
    image.setAttribute("src", pokemon.img); 
    name.setAttribute("class", "name");
    image.setAttribute("class", "imagenPokemones");
    type.setAttribute("class", "typePokemon");
    divTarjeta.appendChild(card);
    card.appendChild(image);
    card.appendChild(numbers);
    card.appendChild(name);
    card.appendChild(type);
  });
};
mostrarData(data);
botonesHeader.forEach((boton) =>
  boton.addEventListener("click", (event) => {
    const botonFilter = event.currentTarget.value;
    const pokemones = document.getElementById("dataHtml");
    pokemones.innerHTML = "";
    const dataFiltrada = filter(botonFilter, data);
    mostrarData(dataFiltrada);
  })
);
const selectOrdenar = document.getElementById("selectOrdenar");
selectOrdenar.addEventListener("change", () => {
  const dataOriginal = [...data]
  const opcionElegida = selectOrdenar.value;
  if (opcionElegida === "all") {
    mostrarData(dataOriginal);
  }
  else {
    const dataOrdenadaAZ = ordenar(opcionElegida, dataOriginal);
    mostrarData(dataOrdenadaAZ);
=======
//se importa la dat de la corresponiente ruta
import dataPokemon from "./data/pokemon/pokemon.js";
//const cortarData = dataPokemon.pokemon.slice(0,10);
import { filterPokemonsByType } from "./data.js";
const divTarjeta = document.getElementById("data");
const botonesHeader = document.querySelectorAll(".btn-header");
const mostrarData = (pokemones) => {
  divTarjeta.innerHTML = "";
  pokemones.forEach((pokemon) => {
    const card = document.createElement("div");
    const name = document.createElement("name");
    name.innerHTML = pokemon.name;
    const numbers = document.createElement("h1");
    numbers.innerHTML = pokemon.num;
    const type = document.createElement("type");
    type.innerHTML = pokemon.type;
    const image = document.createElement("img"); //<img>
    image.setAttribute("src", pokemon.img); //image.src = pokemon.img
    name.setAttribute("class", "name");
    image.setAttribute("class", "imagenPokemones");
    type.setAttribute("class", "typePokemon");
    divTarjeta.appendChild(card);
    card.appendChild(image);
    card.appendChild(numbers);
    card.appendChild(name);
    card.appendChild(type);
  });
};
mostrarData(dataPokemon.pokemon);

botonesHeader.forEach((boton) =>
  boton.addEventListener("click", (event) => {
    const botonFilter = event.currentTarget.value;
    const pokemones = document.getElementById("data");
    pokemones.innerHTML = "";
    const data = dataPokemon.pokemon;
    const filter = data.filter((poke) => poke.type.includes(botonFilter));
    mostrarData(filter);
  })
);
const selectOrdenar = document.getElementById("selectOrdenar");
selectOrdenar.addEventListener("change", (event) => {
  /*console.log(event);
  console.log(event.currentTarget);
  console.log(event.currentTarget.value);*/
  const opcionElegida = event.currentTarget.value;
  if (opcionElegida === "nameAsc") {
    // console.log(dataPokemon.pokemon);
    const copiaData = [...dataPokemon.pokemon];
    //console.log(copiaData);
    const ordenado = copiaData.sort();
    //  console.log(ordenado);
    mostrarData(ordenado);
  } else if (opcionElegida === "nameDesc") {
    const reversado = dataPokemon.pokemon.reverse();
    // console.log(reversado);
    mostrarData(reversado);
  } else {
    ("ver-todos");
>>>>>>> 5990e149ce8c417ca804829480594ee7f6d44863
  }
});
