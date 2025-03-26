class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        console.log(`Vehicle make: ${this.make}, Model: ${this.model}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, doors) {
        super(make, model);
        this.doors = doors;
    }

    displayCarInfo() {
        this.displayInfo();
        console.log(`Number of doors: ${this.doors}`);
    }
}

const myCar = new Car('Toyota', 'Corolla', 4);
myCar.displayCarInfo();