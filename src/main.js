//se importa la dat de la corresponiente ruta
import dataPokemon from "./data/pokemon/pokemon.js";
//Enviar solicitud al servideor para obtener archivo json. y como argumento tendra el nombre del archivo

function mostrarData(pokemon) {
  const placeholder = document.getElementById("data");

  pokemon.forEach((diccionario) => {
    const image = document.createElement("img"); //<img>
    image.src = diccionario["img"];
    placeholder.appendChild(image); // <div id="data-output"> <img  src="linkdeimagen"> <img  src="linkdeimagen"> <img  src="linkdeimagen"> <img  src="linkdeimagen"> </div>
  });
}
mostrarData(dataPokemon.pokemon);

