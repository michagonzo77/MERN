class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack (target){
        if (target instanceof Unit){
            target.res -= this.power;
        } else {
            throw new Error("Target must be a unit")
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target){
        if (target instanceof Unit){
            target[this.stat] += this.magnitude
        } else {
            throw new Error("Target must be a unit")
        }
    }
}

const redBelt = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBelt = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgorithm = new Effect("hard algorithm", 2, "increase target's resilience by 3", 'res', 3);
const unhandled = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", 'res', -2);
const pairProgramming = new Effect("Pair Programming", 3, "increase target's power by 2", 'power', 2)

console.log(blackBelt);
console.log(redBelt);
unhandled.play(redBelt);
pairProgramming.play(redBelt);
redBelt.attack(blackBelt);
console.log(redBelt);
console.log(blackBelt);

