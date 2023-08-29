class Memento {
    constructor(value) {
        this.value = value;//обєкт який зберігає стан
    }
};
const creator = {
    save: val => new Memento(val),//приймає значення,створює новий обєкт типу мементо і передає в нього це значення
    restore: memento => memento.value, //приймає обєкт мементо і повертає збережене значення
};
class Caretaker { //відповідає за зберігання та управління обєктами мементо
    constructor() {
        this.values = [];
    }
    addMemento(memento) {
        this.values.push(memento);//додає до масиву
    }
    getMemento(index) {
        return this.values[index];//повертає з масиву за індексом
    }
};
const careTaker = new Caretaker();

careTaker.addMemento(creator.save('hello'));
careTaker.addMemento(creator.save('hello world'));
careTaker.addMemento(creator.save('hello worls!!!'));

console.log(creator.restore(careTaker.getMemento(1)));