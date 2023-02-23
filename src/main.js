//se importa la dat de la corresponiente ruta
import dataPokemon from "./data/pokemon/pokemon.js";
//Enviar solicitud al servideor para obtener archivo json. y como argumento tendra el nombre del archivo

//const container = document.getElementById('container');
//const poke_number = 251
function mostrarData(pokemones) {
  const data = document.getElementById("data");

  pokemones.forEach((pokemon) => {
    const card =document.createElement("div");
    card.innerHTML= pokemon["name"];
    const numbers=document.createElement("number");
    numbers.innerHTML= pokemon["num"];
    const image = document.createElement("img"); //<img>
    image.src = pokemon["img"];
    card.appendChild(numbers);
    card.appendChild(image); 
    data.appendChild(card);
  });
}
mostrarData(dataPokemon.pokemon);

