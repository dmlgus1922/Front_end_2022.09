// Product 클래스 정의. 속성: 이름, 가격, toString 메소드
// 다섯가지의 상품을 만들 것(instance)
// 
// Cart 클래스 - 상품, 수량, 메쏘드: add, sum
// Cart의 총 가격을 구하시오.

class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
    toString() {
        return `제품명: ${this.name}, 가격: ${this.price}`;
    }
}

// class Cart {
//     constructor (product = [], num = 0, pSum = 0) {
//         this.product = product;
//         this.num = num;
//         this.pSum = pSum;
//     }
//     add (prod) {
//         let name = prod.name;
//         let price = prod.price;
//         console.log(toString(name));
//         if (name in this.product) {
//             this.product.number++;
//         } else {
//           this.product.push({name:0});
//         }

//         // this.product.push(prod);
//         this.num++;
//         this.pSum += price;
//     }
//     sum () {
//         return `카트 내 상품의 총 가격은 ${this.pSum}원입니다.`;
//     }
// }

const apple = new Product('사과', 1000);
const grape = new Product('포도', 1200);
const pear = new Product('배', 1300);

// const cart = new Cart();
// cart.add(apple);
// cart.add(apple);
// cart.add(pear);
// console.log(cart.sum());
// console.log(`카트 내 상품의 총 수량은 ${cart.num}개입니다.`);
// console.log(cart.product);


class Cart {
    constructor() {
        this.cart = [];
    }
    add(product, quantity) {
        if (quantity <= 0) {
            return;
        }
        this.cart.push({product, quantity});
    }
    sum() {
        let totalPrice = 0;
        for (let cart of this.cart) {
            totalPrice += cart.quantity * cart.product.price;
        }
        return totalPrice;
    }
    toString(){
        let result = '';
        for (let cart of this.cart) {
            result += cart.product.toString() + `, 수량: ${cart.quantity}\n`;
        }
        result += `합계 금액: ${this.sum()}`;
        return result;
    }
}   

const cart = new Cart();
cart.add(apple, 3);
cart.add(pear, 4);
cart.add(grape, 1);
console.log(cart.sum());
console.log(cart.toString());