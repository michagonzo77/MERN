class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    
    sayName() {
        console.log(this.name);
    }

    showStats() {
        console.log(`Name: ${this.name} Health: ${this.health} Speed: ${this.speed} Strength: ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
    }
}

const michael = new Ninja('Michael', 100);
console.log(michael);
michael.sayName();
michael.showStats();
michael.drinkSake();
michael.showStats();