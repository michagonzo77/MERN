// card
// abstraction
export class Card {
    constructor(name="", cost=0) {
        this.name = name;
        this.cost = cost;
    }

    displayCard(){
        let output = "***************\n" +
            "name:" + this.name + "\n" + "cost:" + this.cost + "\n";
        return output
    }
}
// unit card
export class Unit extends Card {
    constructor(name = "", cost = 0, power = 0, resilience = 0) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }

    alterAttributes(effectCard){
        this[effectCard.stat] += effectCard.magnitude;
    }

    attack(target){
        target.alterAttributes({
            stat: "resilience",
            magnitude: -this.power
        })
    }

    // Polymorphism
    displayCard(){
        let output = super.displayCard();
        output += "power:" + this.power + "\n" +
        "resilience:" + this.resilience;
        return output;
    }
}

// effect card

export class Effect extends Card{
    constructor(name="",cost=0, text="", stat="", magnitude=0){
        super(name,cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    playEffect(unitCard){
        unitCard.alterAttributes(this);
    }

    // Polymorphism -- grabbing from parent and morphing for your needs
    displayCard(){
        let output = super.displayCard();
        output += "text:" + this.text + "\n" +
        "stat:" + this.stat + "\n" +
        "magnitude:" + this.magnitude;
        return output;
    }
}