function filter(option, data) {
  if (option === "" || data.length === 0) {
    return false;
  }
  return data.filter((poke) => poke.type.includes(option));
}
function ordenar(condicion, dataPokemon) {
  if (condicion === "" || dataPokemon.length === 0) {
    return false;
  }
  const ordenado = dataPokemon.sort((a, b) => {
    if (condicion === "nameAsc") {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    } else {
      return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
    }
  });
  return ordenado;
}

function pokemonesPromedio(data) {
  const arrayPromedio = [];
  data.map((pok) => {
    const ataque = parseInt(pok.stats["base-attack"]);
    const defense = parseInt(pok.stats["base-defense"]);
    const stamina = parseInt(pok.stats["base-stamina"]);
    const averages = Math.round((ataque + defense + stamina) / 3); // promedio
    const copiaPok = { ...pok, power: averages };
    arrayPromedio.push(copiaPok);
  });

  arrayPromedio.sort((a, b) => b.power - a.power); //Ordena los pokemones
  const cortarArray = arrayPromedio.slice(0, 10); //Cortar top 10

  return cortarArray;
}

export { filter, ordenar, pokemonesPromedio };