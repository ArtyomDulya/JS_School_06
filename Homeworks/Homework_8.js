
class Animal {
    constructor(_habitat) {
        this._habitat = this.habitat;
    }

    setHabitat(_habitat){
        this._habitat = _habitat;
    }
    getHabitat() {
        return this._habitat;
    }

    eat() {
        console.log("eating")
    }

    run(){
        console.log("runing");
    }

}

class Tiger {
    constructor(name, habitat, comfortFood) {
        (habitat);
        this.name = name;
        this.comfortFood = comfortFood;
    }

    setName(name){
        this._name = name;
    }
    getName() {
        return this._name;
    }
    setHabitat(_habitat){
        this._habitat = _habitat;
    }
    getHabitat() {
        return this._habitat;
    }
    setComfortFood(_comfortFood){
        this._comfortFood = _comfortFood;
    }
    getComfortFood() {
        return this._comfortFood;
    }

    eat() {
       return `eating ${this._comfortFood}`;
    }

    run(){
        return "runing fast";
    }
}

let animal = new Animal();
animal.setHabitat("Wood");
console.log(animal)
animal.eat();
animal.run();

let tiger = new Tiger();
tiger.setName("Prosha");
tiger.setHabitat("jungle")
tiger.setComfortFood("meat")

console.log(tiger.getName());
console.log(tiger.getHabitat());
console.log(tiger.getComfortFood());
console.log(tiger.eat());
console.log(tiger.run());

