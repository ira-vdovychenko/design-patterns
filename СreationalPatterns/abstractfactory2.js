// Абстрактний клас фабрики кнопок
class ButtonFactory {
    createButton() {}
}

// Конкретний клас фабрики кнопок для macOS
class MacOSButtonFactory extends ButtonFactory {
    createButton() {
        return new MacOSButton();
    }
}

// Конкретний клас фабрики кнопок для Windows
class WindowsButtonFactory extends ButtonFactory {
    createButton() {
        return new WindowsButton();
    }
}

// Абстрактний клас кнопки
class Button {
    render() {}
}

// Конкретний клас кнопки у macOS стилі
class MacOSButton extends Button {
    render() {
        return 'Rendered a macOS button';
    }
}

// Конкретний клас кнопки у Windows стилі
class WindowsButton extends Button {
    render() {
        return 'Rendered a Windows button';
    }
}

// Використання абстрактної фабрики для створення кнопок у різних операційних системах
function createButton(os) {
    if (os === 'macOS') {
        return new MacOSButtonFactory().createButton();
    } else if (os === 'Windows') {
        return new WindowsButtonFactory().createButton();
    } else {
        throw new Error(`Unsupported operating system: ${os}`);
    }
}

// Використання абстрактної фабрики для створення кнопок у різних операційних системах
const macButton = createButton('macOS');
const windowsButton = createButton('Windows');

console.log(macButton.render());     // Виведе: "Rendered a macOS button"
console.log(windowsButton.render()); // Виведе: "Rendered a Windows button"
