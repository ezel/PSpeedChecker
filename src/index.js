import React from 'react';
import ReactDOM from 'react-dom/client';
import SpeedViewer from './speedviewer';

var start_name_list = ["Zacian-Crowned", "Incineroar", "Kyogre", "Regieleki", "Grimmsnarl", "Thundurus", "Rillaboom", "Groudon", "Calyrex-Shadow", "Amoonguss", "Whimsicott", "Calyrex-Ice", "Landorus-Therian", "Charizard", "Gastrodon", "Zapdos", "Indeedee-F", "Venusaur", "Yveltal", "Palkia", "Urshifu", "Porygon2", "Tornadus", "Ditto", "Dialga", "Ferrothorn", "Dusclops", "Solgaleo", "Blastoise", "Kartana", "Seismitoad", "Mimikyu", "Kyurem-White", "Kingdra", "Urshifu-Rapid-Strike", "Shedinja", "Raichu", "Torkoal", "Ho-Oh", "Cinderace", "Lapras"]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SpeedViewer initPMNames={start_name_list} />
  </React.StrictMode>
);
