// Батьківський клас для станів світла
class LightState {
    constructor(light) {
        this.light = light;
    }

    handle() {
        console.log("Стандартна обробка стану світла.");
    }
}

class RedLightState extends LightState {
    handle() {
        console.log("Зупинитися! Світло червоне.");
    }
}

class GreenLightState extends LightState {
    handle() {
        console.log("Їдьте! Світло зелене.");
    }
}

class YellowLightState extends LightState {
    handle() {
        console.log("Підготуйтеся до зупинки. Світло жовте.");
    }
}

// Клас Контексту
class TrafficLight {
    constructor() {
        this.state = new RedLightState(this);
    }

    setState(state) {
        this.state = state;
    }

    change() {
        this.state.handle();
    }
}

// Використання патерна "Стан"
const trafficLight = new TrafficLight();

trafficLight.change(); // Зупинитися! Світло червоне.
trafficLight.setState(new GreenLightState(trafficLight));
trafficLight.change(); // Їдьте! Світло зелене.
trafficLight.setState(new YellowLightState(trafficLight));
trafficLight.change(); // Підготуйтеся до зупинки. Світло жовте.
