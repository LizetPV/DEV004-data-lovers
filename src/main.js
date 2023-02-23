//se importa la dat de la corresponiente ruta
import dataPokemon from "./data/pokemon/pokemon.js";

const cortarData = dataPokemon.pokemon.slice(0,10);

function mostrarData(pokemones) {
  const data = document.getElementById("data");

  pokemones.forEach((pokemon) => {
    const card = document.createElement("div");
    const name = document.createElement("name");
    name.innerHTML= pokemon["name"];
    const numbers = document.createElement("number");
    numbers.innerHTML= pokemon["num"];
    const categoria = document.createElement("type");
    categoria.innerHTML= pokemon["type"];
    const image = document.createElement("img"); //<img>
    image.src = pokemon["img"];
    card.appendChild(image); 
    card.appendChild(name);
    card.appendChild(categoria);
    card.appendChild(numbers);
    data.appendChild(card);
  });
}
mostrarData(cortarData);

