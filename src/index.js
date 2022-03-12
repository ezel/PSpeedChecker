import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import embed, { vega } from 'vega-embed';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';

const full_pm = [
  {
    "num": 738,
    "name": "Vikavolt",
    "type1": "Bug",
    "type2": "Electric",
    "base_spe": 43
  },
  {
    "num": 277,
    "name": "Swellow",
    "type1": "Normal",
    "type2": "Flying",
    "base_spe": 125
  },
  {
    "num": 16,
    "name": "Pidgey",
    "type1": "Normal",
    "type2": "Flying",
    "base_spe": 56
  },
  {
    "num": 292,
    "name": "Shedinja",
    "type1": "Bug",
    "type2": "Ghost",
    "base_spe": 40
  },
  {
    "num": 658,
    "name": "Greninja",
    "type1": "Water",
    "type2": "Dark",
    "base_spe": 122
  },
  {
    "num": 706,
    "name": "Goodra-Hisui",
    "type1": "Steel",
    "type2": "Dragon",
    "base_spe": 60
  },
  {
    "num": 711,
    "name": "Gourgeist-Large",
    "type1": "Ghost",
    "type2": "Grass",
    "base_spe": 69
  },
  {
    "num": 288,
    "name": "Vigoroth",
    "type1": "Normal",
    "type2": null,
    "base_spe": 90
  },
  {
    "num": 319,
    "name": "Sharpedo",
    "type1": "Water",
    "type2": "Dark",
    "base_spe": 95
  },
  {
    "num": 617,
    "name": "Accelgor",
    "type1": "Bug",
    "type2": null,
    "base_spe": 145
  },
  {
    "num": 305,
    "name": "Lairon",
    "type1": "Steel",
    "type2": "Rock",
    "base_spe": 40
  },
  {
    "num": 368,
    "name": "Gorebyss",
    "type1": "Water",
    "type2": null,
    "base_spe": 52
  },
  {
    "num": 743,
    "name": "Ribombee",
    "type1": "Bug",
    "type2": "Fairy",
    "base_spe": 124
  },
  {
    "num": 60,
    "name": "Poliwag",
    "type1": "Water",
    "type2": null,
    "base_spe": 90
  },
  {
    "num": 265,
    "name": "Wurmple",
    "type1": "Bug",
    "type2": null,
    "base_spe": 20
  },
  {
    "num": 583,
    "name": "Vanillish",
    "type1": "Ice",
    "type2": null,
    "base_spe": 59
  },
  {
    "num": 84,
    "name": "Doduo",
    "type1": "Normal",
    "type2": "Flying",
    "base_spe": 75
  },
  {
    "num": 839,
    "name": "Coalossal",
    "type1": "Rock",
    "type2": "Fire",
    "base_spe": 30
  },
  {
    "num": 120,
    "name": "Staryu",
    "type1": "Water",
    "type2": null,
    "base_spe": 85
  },
  {
    "num": 479,
    "name": "Rotom-Heat",
    "type1": "Electric",
    "type2": "Fire",
    "base_spe": 86
  },
  {
    "num": 395,
    "name": "Empoleon",
    "type1": "Water",
    "type2": "Steel",
    "base_spe": 60
  },
  {
    "num": 185,
    "name": "Sudowoodo",
    "type1": "Rock",
    "type2": null,
    "base_spe": 30
  },
  {
    "num": 841,
    "name": "Flapple",
    "type1": "Grass",
    "type2": "Dragon",
    "base_spe": 70
  },
  {
    "num": 74,
    "name": "Geodude-Alola",
    "type1": "Rock",
    "type2": "Electric",
    "base_spe": 20
  },
  {
    "num": 636,
    "name": "Larvesta",
    "type1": "Bug",
    "type2": "Fire",
    "base_spe": 60
  },
  {
    "num": 856,
    "name": "Hatenna",
    "type1": "Psychic",
    "type2": null,
    "base_spe": 39
  },
  {
    "num": 845,
    "name": "Cramorant",
    "type1": "Flying",
    "type2": "Water",
    "base_spe": 85
  },
  {
    "num": 745,
    "name": "Lycanroc-Midnight",
    "type1": "Rock",
    "type2": null,
    "base_spe": 82
  },
  {
    "num": 311,
    "name": "Plusle",
    "type1": "Electric",
    "type2": null,
    "base_spe": 95
  },
  {
    "num": 163,
    "name": "Hoothoot",
    "type1": "Normal",
    "type2": "Flying",
    "base_spe": 50
  },
  {
    "num": 718,
    "name": "Zygarde",
    "type1": "Dragon",
    "type2": "Ground",
    "base_spe": 95
  },
  {
    "num": 258,
    "name": "Mudkip",
    "type1": "Water",
    "type2": null,
    "base_spe": 40
  }
];
  

function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={full_pm.map((option) => option.name)}
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

var vc_clear_all = vega.changeset().remove(function(t) {console.log(t);return true});
var vc_pick_random = vega.changeset().insert([{
  "num": 902,
  "name": "Basculegion-F",
  "type1": "Water",
  "type2": "Ghost",
  "base_spe": 78
}]);

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <button onClick={()=>v1.then((res)=>{res.view.change('filtered_pms', vc_pick_random).run()} )}>Insert</button>
    </div>
  );
}

function DisplayList() {
  const [dList, setDList] = React.useState([]);
  const handleRemoveItem = (e) => {
    console.log(e);
    const name = e.target.getAttribute("name");
    setDList(dList.filter(i => i !== name));
   };

  return (
    <div>
      <button onClick={()=> {var vadd=document.getElementById('free-solo-2-demo').value; setDList(dList=>[...dList, vadd]);}}>Add</button>
      <ul>
        {dList.map( (e,i) =>
          <li key={i}>{ e } 
            <button name={e} onClick={handleRemoveItem}>x</button>
          </li>
        )}
      </ul>
      <button onClick={()=> {}}>Update</button>
      <br/>
      <button onClick={()=>v1.then((res)=>{res.view.change('filtered_pms', vc_clear_all).run()} )}>Clear All</button>
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


const spec = {
"config": {"view": {"continuousWidth": 800, "continuousHeight": 400}},
"transform": [
  {"calculate": "parseInt(((datum.base_spe*2+0+0/4)*1/2+5)*0.9)", "as": "stats_nnzero"},
  {"calculate": "parseInt(((datum.base_spe*2+31+0/4)*1/2+5)*0.9)", "as": "stats_nniv"},
  {"calculate": "parseInt(((datum.base_spe*2+31+0/4)*1/2+5))", "as": "stats_noev"},
  {"calculate": "parseInt(((datum.base_spe*2+31+252/4)*1/2+5))", "as": "stats_evmax"},
  {"calculate": "parseInt(((datum.base_spe*2+31+0/4)*1/2+5)*1.1)", "as": "stats_npnoev"},
  {"calculate": "parseInt(((datum.base_spe*2+31+252/4)*1/2+5)*1.1)", "as": "stats_nmax"},
  {"calculate": "parseInt(datum.stats_nmax*1.5)", "as": "u1"},
  {"calculate": "parseInt(datum.stats_nmax*2)", "as": "u2"},
  {"calculate": "parseInt(datum.stats_noev*2/3)", "as": "d1"},
  {"calculate": "parseInt(datum.stats_noev/2)", "as": "d2"}
 ],
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
      {"title": "+2", "field": "u2"},
      {"title": "+1", "field": "u1"},
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
      "mark": {"type":"point", "shape":"triangle-up","strokeWidth":1.5, "size":50}, 
      "encoding": {
        "y": {"field": "u1", "type": "quantitative"}
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