class OrderStatus { // базовий клас спільний інтерфейс
    constructor(name, nextStatus) {
        this.name = name;
        this.nextStatus = nextStatus;
    }
    next() {
        return new this.nextStatus();
    }
};
class WaitengForPayment extends OrderStatus {
    constructor() {
        super('waitingForPayment', Shipping);//імя поточного кроку і наступного
    }
};
class Shipping extends OrderStatus {
    constructor() {
        super('shipping', Delivered);
    }
};
class Delivered extends OrderStatus {
    constructor() {
        super('delivered', Delivered)
    }
}; 
class Order { // обєкт контекст
    constructor() {
        this.state = new WaitengForPayment();
    }
    nextState() {
        this.state = this.state.next();
    }
}; 
const myOrder = new Order();
console.log(myOrder.state.name);

myOrder.nextState();
console.log(myOrder.state.name);

myOrder.nextState();
console.log(myOrder.state.name);
