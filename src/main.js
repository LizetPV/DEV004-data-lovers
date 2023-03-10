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
  }
});

data.forEach((botonTopTen)=>
  botonTopTen.addEventListener("click", (event) => {
    const botonTopTen = document.getElementById("divTop10");
    //aquí debe ir el evento que va a llamar a los arrays que queremos sumar
    //mostrar data
  })
);