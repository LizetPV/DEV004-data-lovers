/*// estas funciones son de ejemplo

export const pokemon = ( ) => {
  return 'pokemon';
};

//export const anotherExample = () => {
  //return 'OMG';
//};*/
function filterPokemonsByType() {

}

const filter = (option, data) => {
  return data.filter((poke) => poke.type.includes(option));
}

const ordenar = (condicion, dataPokemon) => {
  const ordenado = dataPokemon.sort((a, b) => {
    if (condicion === "nameAsc") {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    } else {
      return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
    }
  });
  return ordenado;
}

export {
  filter,
  filterPokemonsByType,
  ordenar
}