// Складна система з різними підсистемами
class Engine {
    start() {
        console.log('Двигун запущено');
    }
}

class Lights {
    turnOn() {
        console.log('Фари увімкнено');
    }
}

class Ignition {
    ignite() {
        console.log('Система запалювання активована');
    }
}

// Фасад, який надає спрощений інтерфейс для користувача
class CarFacade {
    constructor() {
        this.engine = new Engine();
        this.lights = new Lights();
        this.ignition = new Ignition();
    }

    startCar() {
        this.engine.start();
        this.lights.turnOn();
        this.ignition.ignite();
        console.log('Автомобіль готовий до руху');
    }
}

// Використання фасаду для спрощення запуску автомобіля
const myCar = new CarFacade();
myCar.startCar();
