// todo: SystemJS can't handle the shortened form npm uses. 
import _  from "./node_modules/underscore/underscore";

export function run() {
    console.log("running!");
    var d6 = new LoadedDie(6);

    var result = d6.roll();
    console.log(result);
}


class Die {
    constructor(sides) {
        this.sides = sides;
    }
    roll() {
        return random(1, this.sides);
    }
}

class LoadedDie extends Die {
    constructor(only) {
        this.only = only;
    }
    roll() {
        return this.only;
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
