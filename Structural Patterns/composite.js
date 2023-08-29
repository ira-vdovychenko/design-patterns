class Equipment {
    getPrice() {
        return this.price || 0;   
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    setPrice(price) {
        this.price = price;
    }
};
class Engine extends Equipment {
    constructor() {
        super();
        this.setName('Engine');
        this.setPrice(800);
    }
};
class Body extends Equipment {
    constructor() {
        super();
        this.setName('Body');
        this.setPrice(3000);
    }
};
class Tools extends Equipment {
    constructor() {
        super();
        this.setName('Tools');
        this.setPrice(4000);
    }
};
class Composite extends Equipment {
    constructor() {
        super();
        this.equitments = [] ;
    }
    add(equitment) {
        this.equitments.push(equitment);
    }
    getPrice() {
        return this.equitments
        .map(equitment => equitment.getPrice())
        .reduce((a, b) => a + b);
    }
};
class Car extends Composite {
    constructor() {
        super();
        this.setName('Audi');
    }
};
const myCar = new Car;

myCar.add(new Engine());
myCar.add(new Tools());
myCar.add(new Body());

console.log(`${myCar.getName()} price is ${myCar.getPrice()}`);
