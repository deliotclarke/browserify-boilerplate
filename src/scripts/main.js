import sayHello from "./hello"
import sayGoodbye from "./goodbye"
import SandwichMaker from "./sandwichMaker"
import createCar from "./createCar"
import garage from "./garageFactory"


// sayHello()
// sayGoodbye()

// SandwichMaker.placeOrder("rye", "capicola", "provolone")
// SandwichMaker.getOrder();

// car stuff below!

// Create two cars using the function you imported
const mustang = createCar("Ford", "Mustang")
const accord = createCar("Honda", "Accord")
const jetta = createCar("Volkswagen", "Jetta")

// Drive the cars for a while
mustang.drive("the grocery store")
accord.drive("Indianapolis")

// Park the cars in the garage
garage.setInventory(mustang);
garage.setInventory(accord);
garage.setInventory(jetta);

console.table(garage.getInventory());

console.log(garage.getOneCar(mustang));

console.log(garage);