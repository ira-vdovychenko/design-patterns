// Клас для представлення кольору
class Color {
    constructor(name) {
        this.name = name;
    }
}

// Фабрика кольорів (легковаговик)
class ColorFactory {
    constructor() {
        this.colors = {};
    }

    getColor(name) {
        if (!this.colors[name]) {
            this.colors[name] = new Color(name);
        }
        return this.colors[name];
    }
}

// Клас для створення фігур
class Shape {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    draw() {
        console.log(`Drawing a ${this.color.name} shape at (${this.x}, ${this.y})`);
    }
}

// Клієнтський код
const factory = new ColorFactory();

const red = factory.getColor('red');
const blue = factory.getColor('blue');

const shapes = [
    new Shape(1, 2, red),
    new Shape(3, 4, red),
    new Shape(5, 6, blue),
    new Shape(7, 8, red),
    new Shape(9, 10, blue)
];

shapes.forEach(shape => {
    shape.draw();
});
