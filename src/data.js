/*// estas funciones son de ejemplo

export const pokemon = ( ) => {
  return 'pokemon';
};

//export const anotherExample = () => {
  //return 'OMG';
//};*/
function filterPokemonsByType() {
 
}

const filter =(condicion,data)=>{
  return data.filter((poke) => poke.type.includes(condicion));
}


export {
  filter,
  filterPokemonsByType
}