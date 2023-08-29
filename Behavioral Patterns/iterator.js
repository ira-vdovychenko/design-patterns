// Створюємо клас ітератора для перебору масиву
class ArrayIterator {
    constructor(array) {
      this.array = array;
      this.index = 0;
    }
  
    next() {
      if (this.hasNext()) {
        return this.array[this.index++];
      }
      return null;
    }
  
    hasNext() {
      return this.index < this.array.length;
    }
  }
  
  // Колекція для перебору
  const myArray = [1, 2, 3, 4, 5];
  
  // Створюємо ітератор для колекції
  const iterator = new ArrayIterator(myArray);
  
  // Перебираємо та виводимо елементи колекції
  while (iterator.hasNext()) {
    console.log(iterator.next());
  }
  