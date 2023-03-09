
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

function strongerPokemon(dataPokemon){
  dataPokemon.sort(function(a,b){
    return(parseInt(a.stats['base-attack'] + a.stats['base-defense'] + a.stats['base-stamina'])) - parseInt((b.stats['base-attack'] + b.stats['base-defense'] + b.stats['base-stamina']));
  })
}
//aquí debe ir el cálculo
//base attack + base defense + base stamina = promedio
//ordenar los 10 pokemones desde el más fuerte al menos fuerte.


export {
  filter,
  ordenar,
  strongerPokemon
}
