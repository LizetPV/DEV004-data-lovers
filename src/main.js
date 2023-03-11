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
  const dataOriginal = [...data];
  const opcionElegida = selectOrdenar.value;
  if (opcionElegida === "all") {
    mostrarData(dataOriginal);
  } else {
    const dataOrdenadaAZ = ordenar(opcionElegida, dataOriginal);
    mostrarData(dataOrdenadaAZ);
  }
});

const pokemonesPromedio = data.map((pok)=>{
  const fullName = pok.name;
  const ataque = parseInt(pok.stats["base-attack"]);
  const defense = parseInt(pok.stats["base-defense"]);
  const stamina = parseInt(pok.stats["base-stamina"]);
  const promedios = Math.round((ataque + defense + stamina) / 3);
  const copiaPok = {...pok,num:promedios}
  return copiaPok
})

console.log("3",pokemonesPromedio);
const top10 = sortable
  .sort(function (a, b) {
    return b[1] - a[1];
  })
  .slice(0, 10);
console.log(top10);

boton.addEventListener("click", (event) => {
  //const pokemones = event.currentTarget.value;
  const pokemonesFuertes = document.getElementsByClassName("divTop10");
  pokemones.innerHTML = "";
  mostrarData(top10);
});
console.log(boton);