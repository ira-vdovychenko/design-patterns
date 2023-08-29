// Старий об'єкт (старий інтерфейс)
class LegacyPrinter {
    printLegacy(text) {
      console.log(`(Legacy) ${text}`);
    }
  }
  
  // Новий об'єкт (новий інтерфейс)
  class ModernPrinter {
    print(text) {
      console.log(`(Modern) ${text}`);
    }
  }
  
  // Адаптер для використання нового об'єкта зі старим кодом
  class PrinterAdapter {
    constructor(modernPrinter) {
      this.modernPrinter = modernPrinter;
    }
  
    printLegacy(text) {
      this.modernPrinter.print(text);
    }
  }
  
  // Створюємо об'єкти
  const legacyPrinter = new LegacyPrinter();
  const modernPrinter = new ModernPrinter();
  const printerAdapter = new PrinterAdapter(modernPrinter);
  
  // Використання старого об'єкта через адаптер
  legacyPrinter.printLegacy("Hello from legacy printer"); // Виведе: "(Legacy) Hello from legacy printer"
  
  // Використання нового об'єкта
  modernPrinter.print("Hello from modern printer"); // Виведе: "(Modern) Hello from modern printer"
  
  // Використання нового об'єкта через адаптер
  printerAdapter.printLegacy("Hello through adapter"); // Виведе: "(Modern) Hello through adapter"
  