// Стара система логування
class OldLogger {
    logMessage(msg) {
      console.log(`[OldLogger] ${msg}`);
    }
  }
  
  // Нова система логування
  class NewLogger {
    log(msg) {
      console.log(`[NewLogger] ${msg}`);
    }
  }
  
  // Адаптер для використання нової системи логування у старому коді
  class NewLoggerAdapter {
    constructor(newLogger) {
      this.newLogger = newLogger;
    }
  
    logMessage(msg) {
      this.newLogger.log(msg);
    }
  }
  
  // Функція для логування повідомлення
  function logMessage(logger, msg) {
    logger.logMessage(msg);
  }
  
  // Використання патерна "Адаптер"
  const oldLogger = new OldLogger();
  const newLogger = new NewLogger();
  const newLoggerAdapter = new NewLoggerAdapter(newLogger);
  
  logMessage(oldLogger, "Hello from the old logger"); // Виведе: "[OldLogger] Hello from the old logger"
  logMessage(newLoggerAdapter, "Hello from the new logger"); // Виведе: "[NewLogger] Hello from the new logger"
  