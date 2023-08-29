// Абстрактний інтерфейс фабрики персонажів та їх обладнання
class CharacterFactory {
    createCharacter() {}
    createWeapon() {}
  }
  
  // Конкретна фабрика для воїнів
  class WarriorFactory extends CharacterFactory {
    createCharacter(name) {
      return new Warrior(name);
    }
    
    createWeapon() {
      return new Sword();
    }
  }
  
  // Конкретна фабрика для магів
  class MageFactory extends CharacterFactory {
    createCharacter(name) {
      return new Mage(name);
    }
    
    createWeapon() {
      return new Staff();
    }
  }
  
  // Базовий клас для персонажів
  class Character {
    constructor(name, weapon) {
      this.name = name;
      this.weapon = weapon;
    }
    
    attack() {
      return `${this.name} атакує ворога за допомогою ${this.weapon.getName()}`;
    }
  }
  
  // Базовий клас для обладнання
  class Weapon {
    getName() {}
  }
  
  // Конкретний клас для меча
  class Sword extends Weapon {
    getName() {
      return 'меча';
    }
  }
  
  // Конкретний клас для чарівного посоху
  class Staff extends Weapon {
    getName() {
      return 'чарівного посоху';
    }
  }
  
  // Конкретний клас для воїна
  class Warrior extends Character {
    constructor(name) {
      super(name, new Sword());
    }
  }
  
  // Конкретний клас для мага
  class Mage extends Character {
    constructor(name) {
      super(name, new Staff());
    }
  }
  
  // Використання абстрактної фабрики
  function createCharacterAndWeapon(factory, name) {
    const character = factory.createCharacter(name);
    const weapon = factory.createWeapon();
    character.weapon = weapon;
    return character;
  }
  
  const warriorFactory = new WarriorFactory();
  const mageFactory = new MageFactory();
  
  const warrior = createCharacterAndWeapon(warriorFactory, 'Артур');
  console.log(warrior.attack()); // Виведе: "Артур атакує ворога за допомогою меча"
  
  const mage = createCharacterAndWeapon(mageFactory, 'Мерлін');
  console.log(mage.attack()); // Виведе: "Мерлін атакує ворога за допомогою чарівного посоху"
  