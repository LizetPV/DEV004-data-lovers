//se importa la dat de la corresponiente ruta
import dataPokemon from "./data/pokemon/pokemon.js";
//const cortarData = dataPokemon.pokemon.slice(0,10);
import { filter } from "./data.js";
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


    const pokemonData = dataPokemon.pokemon;

    const dataFiltrada=filter(botonFilter,pokemonData)

    mostrarData(dataFiltrada);
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
    const ordenado = copiaData.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())); //A-Z
    //  console.log(ordenado);
    mostrarData(ordenado);
  } else if (opcionElegida === "nameDesc") {
    const reversado = dataPokemon.pokemon.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase())); //Z-A
    // console.log(reversado);
    mostrarData(reversado);
  } else {
    const copiaData = [...dataPokemon.pokemon];
    const ordenado = copiaData.sort((a, b) => a.num.toLowerCase().localeCompare(b.num.toLowerCase()));
    mostrarData(ordenado);
  }
});