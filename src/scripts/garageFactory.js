/*
    Author: Eliot
    Name: createGarage.js
    Purpose: To store cars in garages
*/

/*
    This array only exists within the scope of this method.
    Therefore, no other module can access it. However,
    the `garageSupervisor` object your define below allows
    code in other modules to indirectly access it by using
    the methods.
*/
const garage = []

const GarageManager = {
  setInventory: function (car) {
    garage.push(car);
  },
  getInventory: function () {
    return garage;
  },
  getOneCar: function (carToFindObj) {
    return garage.find(car => car.make === carToFindObj.make && car.model === carToFindObj.model)
  }
}

export default GarageManager