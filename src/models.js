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
      const { name, price } = product;

      if (name != 'Mega Coverage') {
        product.sellIn -= 1;
      }

      if (
        !['Full Coverage', 'Special Full Coverage', 'Mega Coverage'].includes(
          name
        ) &&
        price > 0
      ) {
        product.price -= product.sellIn < 0 || name == 'Super Sale' ? 2 : 1;

        if (product.price < 0) product.price = 0;
      }

      if (name == 'Full Coverage' && price < 50) {
        product.price += 1;
      }

      if (name == 'Special Full Coverage') {
        if (product.sellIn < 0) {
          product.price = 0;
          continue;
        }

        switch (true) {
          case product.sellIn > 5 && product.sellIn <= 10:
            product.price += 2;
            break;
          case product.sellIn <= 5:
            product.price += 3;
            break;
          default:
            product.price += 1;
            break;
        }

        if (product.price > 50) product.price = 50;
      }
    }

    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance,
};
