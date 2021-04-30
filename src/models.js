class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updatePrice() {
    for (const product of this.products) {
      const { name, sellIn, price } = product;

      if (
        !['Full Coverage', 'Special Full Coverage', 'Mega Coverage'].includes(
          name
        ) &&
        price > 0
      ) {
        product.price -= sellIn > 0 ? 1 : 2;
      }

      if (name != 'Mega Coverage') {
        product.sellIn -= 1;
      }
    }

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance,
};
