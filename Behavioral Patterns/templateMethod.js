class Builder { //бфзовий клас спільний інтерфейс
    build() { // шаблонний метод з кроками по збірці авто
        this.addEngine();
        this.installChassis();
        this.addElectronic();
        this.collectAccessories();
    }
};
class TeslaBuilder extends Builder {
    addEngine() {
        console.log('Add Electronic Engine');
        //конкретні дії для додавання саме електронного двигуна
    }
    installChassis() {
        console.log('Install Tesla chassis');
    }
    addElectronic() {
        console.log('Add  special elecrtonic');
    }
    collectAccessories() {
        console.log('Collect Accessories');
    }
};
class BMWBuilder extends Builder {
    addEngine() {
        console.log('Add BMW Engine');
        //конкретні дії для додавання саме електронного двигуна
    }
    installChassis() {
        console.log('Install BMW chassis');
    }
    addElectronic() {
        console.log('Add elecrtonic');
    }
    collectAccessories() {
        console.log('Collect Accessories');
    }
};

const teslaBuilder = new TeslaBuilder();
const bmwBuilder = new BMWBuilder();

teslaBuilder.build();
console.log(teslaBuilder);

bmwBuilder.build();
console.log(bmwBuilder);