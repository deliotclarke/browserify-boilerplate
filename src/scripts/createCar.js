/*
    Author: Eliot!
    Name: createCar.js
    Purpose: Produces a new car object
*/
const CarFactory = (make, model) => {
  const newCar = {
    "make": make,
    "model": model,
    "drive": function (destination) {
      console.log(destination);
    }
  }

  return newCar
}

export default CarFactory