//se importa la dat de la corresponiente ruta
import dataPokemon from "./data/pokemon/pokemon.js";
//const cortarData = dataPokemon.pokemon.slice(0,10);
const data = dataPokemon.pokemon;
import { filter, ordenar } from "./data.js";
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
mostrarData(data);
botonesHeader.forEach((boton) =>
  boton.addEventListener("click", (event) => {
    const botonFilter = event.currentTarget.value;
    const pokemones = document.getElementById("data");
    pokemones.innerHTML = "";

    const dataFiltrada = filter(botonFilter, data)

    mostrarData(dataFiltrada);
  })
);
const selectOrdenar = document.getElementById("selectOrdenar");
selectOrdenar.addEventListener("change", () => {
  /*console.log(event);
  console.log(event.currentTarget);
  console.log(event.currentTarget.value);*/
  const dataOriginal = [...data]
  const opcionElegida = selectOrdenar.value;
  if (opcionElegida === "all") {
    console.log(data)

    mostrarData(dataOriginal);
  }
  else {
    const dataOrdenadaAZ = ordenar(opcionElegida, dataOriginal);

    mostrarData(dataOrdenadaAZ);
  }
});