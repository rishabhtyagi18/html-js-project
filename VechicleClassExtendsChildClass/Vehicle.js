class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.make} ${this.model} is starting.`);
    }

    stop() {
        console.log(`${this.make} ${this.model} is stopping.`);
    }
}

class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year);
        this.doors = doors;
    }

    getDetails() {
        return `${this.year} ${this.make} ${this.model}`;
    }

    honk() {
        console.log(`${this.make} ${this.model} says honk!`);
    }
}

const myCar = new Car('Toyota', 'Camry', 2020, 4);

// Accessing properties
console.log(myCar.make); // Output: Toyota
console.log(myCar.model); // Output: Camry
console.log(myCar.year); // Output: 2020
console.log(myCar.doors); // 4

myCar.start(); // Output: Toyota Camry is starting.
myCar.stop(); // Output: Toyota Camry is stopping.

// Using Car's own method
myCar.honk(); // Output: Toyota Camry says honk!