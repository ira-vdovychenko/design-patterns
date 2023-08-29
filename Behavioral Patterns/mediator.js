class OfficialDealer { //посередник
    constructor() {
        this.customers = [];
    }

    orderAuto(customer, auto, info) {
        const name = customer.getName();

        console.log(`Order name: ${name}, Order auto is ${auto}`);
        console.log(`Additional info: ${info}`);
        this.addToCustomersList(name);
    }

    addToCustomersList(name) {
        this.customers.push(name);
    }

    getCustomersList() {
        return this.customers;
    }
};

class Customer {
    constructor(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }

    getName() {
        return this.name;
    }

    makeOrder(auto, info) {
        this.dealerMediator.orderAuto(this, auto, info);
    }
};

const mediator = new OfficialDealer();

const anton = new Customer('Anton', mediator);
const ira = new Customer('Ira', mediator);

anton.makeOrder('Audi', 'With autopilot!');
console.log(anton);

ira.makeOrder('Tesla', 'With autopilot!');
console.log(ira);

console.log(mediator.getCustomersList);