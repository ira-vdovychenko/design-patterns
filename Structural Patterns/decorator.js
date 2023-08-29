// Основний клас кави
class Coffee {
    getCost() {
        return 5; // Вартість базової кави
    }
    
    getDescription() {
        return "Кава";
    }
}

// Декоратор для додавання молока
class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    
    getCost() {
        return this.coffee.getCost() + 2; // Додаткова вартість молока
    }
    
    getDescription() {
        return this.coffee.getDescription() + ", з молоком";
    }
}

// Декоратор для додавання цукру
class SugarDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    
    getCost() {
        return this.coffee.getCost() + 1; // Додаткова вартість цукру
    }
    
    getDescription() {
        return this.coffee.getDescription() + ", з цукром";
    }
}

// Створюємо об'єкт базової кави
const simpleCoffee = new Coffee();
console.log(simpleCoffee.getDescription()); // Виведе: "Кава"
console.log(simpleCoffee.getCost()); // Виведе: 5

// Додаємо декоратор молока до кави
const coffeeWithMilk = new MilkDecorator(simpleCoffee);
console.log(coffeeWithMilk.getDescription()); // Виведе: "Кава, з молоком"
console.log(coffeeWithMilk.getCost()); // Виведе: 7

// Додаємо декоратор цукру до кави з молоком
const coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk);
console.log(coffeeWithMilkAndSugar.getDescription()); // Виведе: "Кава, з молоком, з цукром"
console.log(coffeeWithMilkAndSugar.getCost()); // Виведе: 8
