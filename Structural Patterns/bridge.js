// Абстракція - Автомобіль
class Car {
    constructor(engine) {
      this.engine = engine;
    }
  
    start() {
      this.engine.start();
      console.log('Car started');
    }
  
    stop() {
      this.engine.stop();
      console.log('Car stopped');
    }
  }
  
  // Реалізація - Двигун
  class Engine {
    start() {
      console.log('Engine started');
    }
  
    stop() {
      console.log('Engine stopped');
    }
  }
  
  // Реалізація - Електричний Двигун
  class ElectricEngine extends Engine {
    start() {
      console.log('Electric engine started');
    }
  
    stop() {
      console.log('Electric engine stopped');
    }
  }
  
  // Реалізація - Бензиновий Двигун
  class GasolineEngine extends Engine {
    start() {
      console.log('Gasoline engine started');
    }
  
    stop() {
      console.log('Gasoline engine stopped');
    }
  }
  
  // Використання паттерна Bridge
  const electricEngine = new ElectricEngine();
  const gasolineEngine = new GasolineEngine();
  
  const electricCar = new Car(electricEngine);
  const gasolineCar = new Car(gasolineEngine);
  
  // Використання автомобілів
  electricCar.start(); // Запустити електричний автомобіль
  electricCar.stop(); // Зупинити електричний автомобіль
  
  gasolineCar.start(); // Запустити бензиновий автомобіль
  gasolineCar.stop(); // Зупинити бензиновий автомобіль
  