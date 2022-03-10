import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import embed, { vega } from 'vega-embed';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
];


var vc_clear_all = vega.changeset().remove(function(t) {console.log(t);return true});
var vc_pick_random = vega.changeset().insert([{
  "num": 902,
  "name": "Basculegion-F",
  "type1": "Water",
  "type2": "Ghost",
  "base_spe": 78,
  "stats_nnzero": 74,
  "stats_nniv": 88,
  "stats_noev": 98,
  "stats_evmax": 130,
  "stats_npnoev": 108,
  "stats_nmax": 143
}]);

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={()=>v1.then((res)=>{res.view.change('filtered_pms', vc_clear_all).run()} )}>Clear</button>
      <button onClick={()=>v1.then((res)=>{res.view.change('filtered_pms', vc_pick_random).run()} )}>Insert</button>
    </div>
  );
}


function SearchPM() {
  const [keyword, setKeyWord] = React.useState("")
  return (
    <div>
      <input></input>
      <p></p>
    </div>
  )
}

function DisplayList() {
  const [dList, setDList] = React.useState([]);
  return (
    <div>
      <SearchPM/>  
      <button onClick={()=> {setDList(dList=>[...dList, "cc"]);}}>Insert</button>
      <ul>
        {dList.map( e =>
          <li>{ e }</li>
        )}
      </ul>
    </div>
  )
}


function App() {
  return (
    <div>
    <Example/>
    <FreeSolo/>
    <DisplayList/>
  </div>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('controller_container')
);


const full_pm = [
  {
    "num": 265,
    "name": "Wurmple",
    "type1": "Bug",
    "type2": null,
    "base_spe": 20,
    "stats_nnzero": 22,
    "stats_nniv": 36,
    "stats_noev": 40,
    "stats_evmax": 72,
    "stats_npnoev": 44,
    "stats_nmax": 79
  },
  {
    "num": 37,
    "name": "Vulpix-Alola",
    "type1": "Ice",
    "type2": null,
    "base_spe": 65,
    "stats_nnzero": 63,
    "stats_nniv": 76,
    "stats_noev": 85,
    "stats_evmax": 117,
    "stats_npnoev": 94,
    "stats_nmax": 128
  },
  {
    "num": 762,
    "name": "Steenee",
    "type1": "Grass",
    "type2": null,
    "base_spe": 62,
    "stats_nnzero": 60,
    "stats_nniv": 74,
    "stats_noev": 82,
    "stats_evmax": 114,
    "stats_npnoev": 90,
    "stats_nmax": 125
  },
  {
    "num": 807,
    "name": "Zeraora",
    "type1": "Electric",
    "type2": null,
    "base_spe": 143,
    "stats_nnzero": 133,
    "stats_nniv": 147,
    "stats_noev": 163,
    "stats_evmax": 195,
    "stats_npnoev": 179,
    "stats_nmax": 214
  },
  {
    "num": 590,
    "name": "Foongus",
    "type1": "Grass",
    "type2": "Poison",
    "base_spe": 15,
    "stats_nnzero": 18,
    "stats_nniv": 31,
    "stats_noev": 35,
    "stats_evmax": 67,
    "stats_npnoev": 39,
    "stats_nmax": 73
  },
  {
    "num": 641,
    "name": "Tornadus",
    "type1": "Flying",
    "type2": null,
    "base_spe": 111,
    "stats_nnzero": 104,
    "stats_nniv": 118,
    "stats_noev": 131,
    "stats_evmax": 163,
    "stats_npnoev": 144,
    "stats_nmax": 179
  },
  {
    "num": 580,
    "name": "Ducklett",
    "type1": "Water",
    "type2": "Flying",
    "base_spe": 55,
    "stats_nnzero": 54,
    "stats_nniv": 67,
    "stats_noev": 75,
    "stats_evmax": 107,
    "stats_npnoev": 83,
    "stats_nmax": 117
  },
  {
    "num": 751,
    "name": "Dewpider",
    "type1": "Water",
    "type2": "Bug",
    "base_spe": 27,
    "stats_nnzero": 28,
    "stats_nniv": 42,
    "stats_noev": 47,
    "stats_evmax": 79,
    "stats_npnoev": 52,
    "stats_nmax": 86
  },
  {
    "num": 210,
    "name": "Granbull",
    "type1": "Fairy",
    "type2": null,
    "base_spe": 45,
    "stats_nnzero": 45,
    "stats_nniv": 58,
    "stats_noev": 65,
    "stats_evmax": 97,
    "stats_npnoev": 72,
    "stats_nmax": 106
  },
  {
    "num": 74,
    "name": "Geodude-Alola",
    "type1": "Rock",
    "type2": "Electric",
    "base_spe": 20,
    "stats_nnzero": 22,
    "stats_nniv": 36,
    "stats_noev": 40,
    "stats_evmax": 72,
    "stats_npnoev": 44,
    "stats_nmax": 79
  },
  {
    "num": 713,
    "name": "Avalugg-Hisui",
    "type1": "Ice",
    "type2": "Rock",
    "base_spe": 38,
    "stats_nnzero": 38,
    "stats_nniv": 52,
    "stats_noev": 58,
    "stats_evmax": 90,
    "stats_npnoev": 64,
    "stats_nmax": 99
  },
  {
    "num": 656,
    "name": "Froakie",
    "type1": "Water",
    "type2": null,
    "base_spe": 71,
    "stats_nnzero": 68,
    "stats_nniv": 82,
    "stats_noev": 91,
    "stats_evmax": 123,
    "stats_npnoev": 100,
    "stats_nmax": 135
  },
  {
    "num": 89,
    "name": "Muk-Alola",
    "type1": "Poison",
    "type2": "Dark",
    "base_spe": 50,
    "stats_nnzero": 49,
    "stats_nniv": 63,
    "stats_noev": 70,
    "stats_evmax": 102,
    "stats_npnoev": 77,
    "stats_nmax": 112
  },
  {
    "num": 276,
    "name": "Taillow",
    "type1": "Normal",
    "type2": "Flying",
    "base_spe": 85,
    "stats_nnzero": 81,
    "stats_nniv": 94,
    "stats_noev": 105,
    "stats_evmax": 137,
    "stats_npnoev": 116,
    "stats_nmax": 150
  },
  {
    "num": 648,
    "name": "Meloetta",
    "type1": "Normal",
    "type2": "Psychic",
    "base_spe": 90,
    "stats_nnzero": 85,
    "stats_nniv": 99,
    "stats_noev": 110,
    "stats_evmax": 142,
    "stats_npnoev": 121,
    "stats_nmax": 156
  },
  {
    "num": 558,
    "name": "Crustle",
    "type1": "Bug",
    "type2": "Rock",
    "base_spe": 45,
    "stats_nnzero": 45,
    "stats_nniv": 58,
    "stats_noev": 65,
    "stats_evmax": 97,
    "stats_npnoev": 72,
    "stats_nmax": 106
  },
  {
    "num": 726,
    "name": "Torracat",
    "type1": "Fire",
    "type2": null,
    "base_spe": 90,
    "stats_nnzero": 85,
    "stats_nniv": 99,
    "stats_noev": 110,
    "stats_evmax": 142,
    "stats_npnoev": 121,
    "stats_nmax": 156
  },
  {
    "num": 104,
    "name": "Cubone",
    "type1": "Ground",
    "type2": null,
    "base_spe": 35,
    "stats_nnzero": 36,
    "stats_nniv": 49,
    "stats_noev": 55,
    "stats_evmax": 87,
    "stats_npnoev": 61,
    "stats_nmax": 95
  },
  {
    "num": 278,
    "name": "Wingull",
    "type1": "Water",
    "type2": "Flying",
    "base_spe": 85,
    "stats_nnzero": 81,
    "stats_nniv": 94,
    "stats_noev": 105,
    "stats_evmax": 137,
    "stats_npnoev": 116,
    "stats_nmax": 150
  },
  {
    "num": 902,
    "name": "Basculegion-F",
    "type1": "Water",
    "type2": "Ghost",
    "base_spe": 78,
    "stats_nnzero": 74,
    "stats_nniv": 88,
    "stats_noev": 98,
    "stats_evmax": 130,
    "stats_npnoev": 108,
    "stats_nmax": 143
  }
];

const spec = {
"config": {"view": {"continuousWidth": 800, "continuousHeight": 400}},
"vconcat": [
{
  "encoding": {
    "x": {
      "axis": {"labelAngle": -35, "title": null},
      "field": "name",
      "type": "ordinal",
      "sort": {"field": "base_spe", "order": "ascending"}
    },
    "tooltip": [
      {"title": "NAME", "field": "name"},
      {"title": "BASE", "field": "base_spe"},
      {"title": "max", "field": "stats_nmax"},
      {"title": "252ev", "field": "stats_evmax"},
      {"title": "+nature", "field": "stats_npnoev"},
      {"title": "v", "field": "stats_noev"},
      {"title": "-nature", "field": "stats_nniv"},
      {"title": "min", "field": "stats_nnzero"}
    ]
  },
  "layer": [
    {
      "mark": {"type": "bar", "width": {"band": 0.9}},
      "encoding": {
        "color": {"value": "#40ff40"},
        "y": {
          "field": "stats_npnoev",
          "axis": {"title": "Stats", "grid": true, "titleColor": "#4c78a8"},
          "type": "quantitative"
        },
        "y2": {"field": "stats_nmax"}
      }
    },
    {
      "mark": {"type": "bar", "width": {"band": 0.6}},
      "encoding": {
        "color": {"value": "#f32030"},
        "y": {"field": "stats_nnzero", "type": "quantitative"},
        "y2": {"field": "stats_nniv"}
      }
    },
    {
      "mark": {"type": "bar", "width": {"band": 0.6}},
      "encoding": {
        "color": {"value": "#4c78a8"},
        "opacity": {"value": 0.8},
        "y": {"field": "stats_noev", "type": "quantitative"},
        "y2": {"field": "stats_evmax"}
      }
    },
    {
      "mark": "tick",
      "encoding": {
        "color": {"value": "#40ff40"},
        "y": {"field": "stats_npnoev", "type": "quantitative"}
      }
    },
    {
      "mark": {
        "type": "line",
        "interpolate": "linear",
        "stroke": "black",
        "strokeWidth": 1.2
      },
      "encoding": {
        "color": {"value": "#a01afa"},
        "y": {"field": "base_spe", "type": "quantitative"}
      }
    }
  ]
},
{
  "height": 40,
  "encoding": {
    "x": {
      "axis": {"labelAngle": -25, "title": "Num"},
      "field": "num",
      "type": "ordinal",
      "sort": {"field": "base_spe", "order": "ascending"}
    }
  },
  "layer": [
    {
      "mark": {"type": "rect", "stroke": "black", "strokeWidth": 0.7},
      "encoding": {
        "color": {
          "field": "type1",
          "scale": {
            "range": [
              "#91C02E",
              "#5A5365",
              "#0A6DC2",
              "#F4D23C",
              "#EB8FE6",
              "#CD406A",
              "#FE9C54",
              "#8EA8DE",
              "#62BB5A",
              "#62BB5A",
              "#D87844",
              "#73CEBF",
              "#9199A1",
              "#44685E",
              "#A96AC8",
              "#F97178",
              "#C5B78B",
              "#5A8DA1",
              "#4F90D5"
            ]
          }
        },
        "y": {"value": 0},
        "y2": {"value": 20}
      }
    },
    {
      "mark": {"type": "rect", "stroke": "black", "strokeWidth": 0.7},
      "transform": [{"filter": "isValid(datum.type2)"}],
      "encoding": {
        "color": {"field": "type2"},
        "y": {"value": 20},
        "y2": {"value": 40}
      }
    }
  ]
}
],
"data": {"name": "filtered_pms"},
"$schema": "https://vega.github.io/schema/vega-lite/v5.2.0.json",
"datasets": {
"filtered_pms": full_pm
}
};

var v1 = embed('#vis', spec);
//var v1 = vegaEmbed("#vis", spec, {mode: "vega-lite"}).then().catch(console.warn);