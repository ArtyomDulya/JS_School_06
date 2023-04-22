// <!-- 2.1 Напишите следующую программу:
// - У клиента должен быть выбор из двух(или трех) видов кофе ( на ваш выбор).
// - Дайте названия вашим видам кофе.
// - Установите цену на кофе в зависимости от величины стаканчика( small, medium, big).
// - Выведите на экран название, затем рецепт выбранного кофе (используйте переменные для 
//     изменения рецепта и названия) и его стоимость (в зависимости от размера стаканчика). 
// - Компоненты кофе не влияют на стоимость.
// - Используйте подходящую комбинацию условий if, (else if), else для решения задачи.
// 2.2 Нарисуйте блок-схему вашей программы (так проще будет написать саму программу).
// Можете использовать следующий сайт https://miro.com/app/board или от руки -->

class Coffee {
    constructor(name, size, topping1, topping2, topping3) {
        this.name = name,
            this.size = size,
            this.topping1 = topping1,
            this.topping2 = topping2,
            this.topping3 = topping3;
    }

    priceCoffe() {

        let price = 0;

        if (this.name == "arabic") {
            price += 5;
        } else if (this.name == "cappuccino") {
            price += 6;
        } else if (this.name == "espresso") {
            price += 8
        } else {
            return console.log("В нашем заведении подаются только такие виды кофе, как : arabic, cappuccino и espresso");
        }

        if (this.size == "small") {
            price += 3;
        } else if (this.size == "medium") {
            price += 5;
        } else if (this.size == "big") {
            price += 8
        } else {
            return console.log("в нашем заведении можно выбрать размер стаканчика с кофе только small, medium, или big");
        }

        if (this.topping1 == "milk" || this.topping2 == "milk" || this.topping3 == "milk") {
            price += 2;
        }
        if (this.topping1 == "syrup" || this.topping2 == "syrup" || this.topping3 == "syrup") {
            price += 3;
        }
        if (this.topping1 == "chocolade" || this.topping2 == "chocolade" || this.topping3 == "chocolade") {
            price += 4;
        }
        return price;
    }
}

class Sandwich {
    constructor(typeBread, filling1, filling2 , filling3, sause1 , sause2, sause3) {
        this.typeBread = typeBread,
        this.filling1 = filling1,
        this.filling2 = filling2,
        this.filling3 = filling3,
        this.sause1 = sause1;
        this.sause2 = sause2;
        this.sause3 = sause3;
    }

    priceSandwich() {

        let price = 0;

        if (this.typeBread == "white") {
            price += 0.5;
        } else if (this.typeBread == "borodino") {
            price += 1;
        } else if (this.typeBread == "moscow") {
            price += 3;
        }

        if (this.filling1 == "sausage" || this.filling2 == "sausage" || this.filling3 == "sausage") {
            price += 3;
        }
        if (this.filling1 == "ham" || this.filling2 == "ham" || this.filling3 == "ham") {
            price += 6;
        }
        if (this.filling1 == "turkey" || this.filling2 == "turkey" || this.filling3 == "turkey") {
            price += 3;
        }
        if (this.filling1 == "chesee" || this.filling2 == "chesee" || this.filling3 == "chesee") {
            price += 3;
        }

        if (this.sause1 == "mayonnaise" || this.sause2 == "mayonnaise" || this.sause3 == "mayonnaise") {
            price += 0.5;
        }
        if (this.sause1 == "tobasco" || this.sause2 == "tobasco" || this.sause3 == "tobasco") {
            price += 0.5;
        }
        if (this.sause1 == "cheesy" || this.sause2 == "cheesy" || this.sause3 == "cheesy") {
            price += 1;
        }

        return price;
    }
}

let coffe = new Coffee("arabic", "big");

console.log(coffe.priceCoffe());

let sandwich = new Sandwich("white", "ham", "sausage", "turkey", "cheesy", "tobasco", "mayonnaise");
console.log(sandwich)

console.log(sandwich.priceSandwich());



