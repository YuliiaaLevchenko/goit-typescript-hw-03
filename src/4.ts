class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }
    getSignature(): number {
        return this.signature;
    }
}

class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }
    getKey(): Key {
        return this.key;
    }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`${person} came in.`);
    } else {
      console.log('The door is closed.');
    }
  }
}

class MyHouse extends House {
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log('The door is opened.');
      } else {
        console.log('Cannot open the door. Wrong key.');
      }
    }
  }


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};