
function filterPokemonsByType() {

}

function filter(option, data){
  if(option === '' || data.length === 0){
    return false
  }
  return data.filter((poke) => poke.type.includes(option));
}


function ordenar(condicion, dataPokemon){
  if(condicion === '' || dataPokemon.length === 0){
    return false}
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
