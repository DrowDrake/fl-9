class Store {
    constructor(price) {
        this.pizzaSlicePrice = price;
        this.weekendDiscount = 0;
        this.nightDiscount = 0;
        this.bonus = 0;
    }

    fullPrice() {
        return this.pizzaSlicePrice - this.pizzaSlicePrice * (this.nightDiscount + this.weekendDiscount);
    }

    buyPizzaSlice() {
        return `Price after discount is 
        ${this.fullPrice().toFixed(2)} and you have 
        ${this.bonus.toFixed()} bonuses’ e.g.`;
    }
}

const getDiscount = storeDisc => {
    let date = new Date(),
        hour = date.getHours(),
        day = date.getDay();

    if (hour === 23 || hour < 6) {
        storeDisc.nightDiscount = 0.3;
    }
    if (day === 0 || day === 6) {
        storeDisc.weekendDiscount = 0.5;
    }

    return storeDisc;
};

const setBonus = storeBonus => {
    let ten = 10;
    storeBonus.bonus += Math.floor(storeBonus.pizzaSlicePrice / ten);

    return storeBonus;
};

const store = new Store(25);
console.log(`Pizza full price ${store.fullPrice()}`);
console.log();
getDiscount(setBonus(store));
console.log(store.buyPizzaSlice());
console.log();
getDiscount(setBonus(store));
console.log(store.buyPizzaSlice());