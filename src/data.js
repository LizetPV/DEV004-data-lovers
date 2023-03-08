<<<<<<< HEAD

function filterPokemonsByType() {

}

function filter(option, data){
  return data.filter((poke) => poke.type.includes(option));
}

function ordenar(condicion, dataPokemon){
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


=======
/*// estas funciones son de ejemplo

export const pokemon = ( ) => {
  return 'pokemon';
};

//export const anotherExample = () => {
  //return 'OMG';
//};*/

export function filterPokemonsByType() {
 
}
>>>>>>> 5990e149ce8c417ca804829480594ee7f6d44863
