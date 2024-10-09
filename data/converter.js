const fs = require("fs");
const srcFile = require('./pokedex.js'); // the raw pokedex.js file from https://dex.pokemonshowdown.com/

function convert_pokedex_to_array(
  destPath = "output_pokedex.json"
) {
  const rawJson = srcFile.BattlePokedex;
  let result = [];
  for (let PM in rawJson) {
    const pmInfo = rawJson[PM]
    // filter other format
    if (pmInfo['num'] < 0) continue;
    if (pmInfo['tier'] === "Illegal") continue;

    result.push({
      num: pmInfo['num'],
      name: pmInfo['name'],
      type1: pmInfo['types'][0],
      type2: pmInfo['types'][1] || null,
      base_spe: pmInfo['baseStats']['spe'],
    });
  }

  fs.writeFile(destPath, JSON.stringify(result), (err) => {
    if (err) {
      console.error('Error writing JSON file:', err);
      return;
    }
    console.log('JSON data has been written to output.json');
  });

  return result.length;
}

const r = convert_pokedex_to_array();
console.log(r);

/*
// get data from dex
function v8Converter() {
    var d = BattlePokedex;
    var results = [];
    for (let pm in d) {
        if ( d[pm]['num'] < 0 ) continue;
        if ( d[pm]['tier'] === "Illegal") continue;
        const iconStyle = Dex.getPokemonIcon(d[pm]['name']);
        const bgArr = iconStyle.split(' ');
        results.push({"d_name":d[pm]['name'],"bg_left":bgArr[bgArr.length-2],"bg_top":bgArr[bgArr.length-1]});
    }
    return JSON.stringify(results);
}

*/