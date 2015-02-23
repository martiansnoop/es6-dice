export class Die {
    constructor(sides) {
        this.sides = sides;
    }
    roll() {
        return random(1, this.sides);
    }
    toString() {
        return "d" + this.sides;
    }
}

export class LoadedDie extends Die {
    constructor(sides, only) {
        super(sides);
        this.only = only;
    }
    roll() {
        return this.only;
    }
    toString() {
        return super.toString() + "*";
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
