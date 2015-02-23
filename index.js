import {Die, LoadedDie} from "classes/Die";

export function run() {
    console.log("running!");
    var d20 = new Die(20);
    var naturalOne = new LoadedDie(20, 1);

    var results = roll(d20, naturalOne);
    console.log(results);
}

function roll(...dice) {
    return dice.map(d => d.roll());
}

