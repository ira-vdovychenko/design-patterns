class Driver { //водій (елемент інтерфейсу)
    constructor(command) {
        this.command = command;
    }

    execute() { //виклик команди
        this.command.execute();
    }
}
//прямого звязку між водієм і двигуном - немає. в водія є ключ - що і є "командою"
class Engine { //прослойка бізнес логіки - результат виконання певної команди
    constructor() {
        this.state = false; //вимкнений двигун
    }

    on() {
        this.state = true;//увімкнути
    }

    off() {
        this.state = false;//вимкнути
    }
};
class StartCommand {
    constructor(engine) {//приймає як аргумент кусок бізнес-логіки
        this.engine = engine;
    }
    execute() {
        this.engine.on(); //виклик команди, який потім виконує бізнес-логіка(двигун)
    }
};
class SwitchOffCommand {
    constructor(engine) {
        this.engine = engine;
    }
    execute() {
        this.engine.off(); //виклик команди, який потім виконує бізнес-логіка(двигун)
    }
};
const engine = new Engine();
console.log(engine);

const onStartCommand = new StartCommand(engine);
const driver = new Driver(onStartCommand);
driver.execute();
console.log(engine);

const onSwitchOffCommand = new SwitchOffCommand(engine);
const driver2 = new Driver(onSwitchOffCommand);
driver2.execute();
console.log(engine);
