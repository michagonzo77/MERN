import { Card, Unit, Effect} from "./cards.mjs";

const card = new Card();

// unit cards
const unitCard1 = new Unit("Red Belt Ninja", 3, 3, 4)
const unitCard2 = new Unit("Black Belt Ninja", 4, 5, 4)

//  effect cards
const effectCard1 = new Effect("Hard Algo", 2, "increase target's resilience by 3", "resilience", 3);
const effectCard2 = new Effect("Unhandled Promise Rejection", 2, "reduce target's resilience by 2", "resilience", -2);
const effectCard3 = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);





console.log(unitCard2.displayCard())
// console.log(unitCard2.displayCard())

// effectCard1.playEffect(unitCard1);
// effectCard2.playEffect(unitCard1);
// effectCard3.playEffect(unitCard1);
unitCard1.attack(unitCard2)

// console.log(unitCard1.displayCard())
console.log(unitCard2.displayCard())
