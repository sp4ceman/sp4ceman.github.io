import { url } from "inspector";
import { Clue } from "./clue";
import { Row, RowState } from "./Row";
import { gameName, maxGuesses } from "./util";
import { WordOfTheDay } from "./wordOfTheDay";

var he = require('he');
const wod_url = `https://www.google.com/search?q=${he.encode(WordOfTheDay)}`


export function Prize() {
  return (
    <div className="App-about">
      
      This is where we show you things about the daily guess!
   
    <a href={wod_url}>{WordOfTheDay}</a>
         
    </div>
  );
}
