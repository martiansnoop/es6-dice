import {Die, LoadedDie} from "classes/Die";

export function run() {
    console.log("running!");
    var d20 = new Die(20);
    var naturalOne = new LoadedDie(20, 1);

    var results = roll(d20, naturalOne);
    console.log(results.map(r => r.toString()));
}

function roll(...dice) {
    return dice.map(d => new Roll(d.roll(), d));
}

class Roll {
    constructor(result, die) {
        this.result = result;
        this.die = die;
    }
    toString() {
        return this.die.toString() + ": " + this.result;
    }
}

