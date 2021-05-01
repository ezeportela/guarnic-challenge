const expect = require('chai').expect;

const { Product, CarInsurance } = require('../src/models');

const testCarInsurance = ({ name, sellIn, price }) => {
  const coTest = new CarInsurance([new Product(name, sellIn, price)]);
  return coTest.updatePrice();
};

describe('modelsTest', () => {
  it('should not have products', () => {
    const coTest = new CarInsurance();
    const products = coTest.updatePrice();
    expect(products).to.be.empty;
  });

  it('should decrement the price by 1', () => {
    const [product] = testCarInsurance({
      name: 'Medium Coverage',
      sellIn: 2,
      price: 10,
    });
    expect(product.price).equal(9);
  });

  it('should decrement the price by 2', () => {
    const [product] = testCarInsurance({
      name: 'Medium Coverage',
      sellIn: 0,
      price: 10,
    });
    expect(product.price).equal(8);
  });

  it('should continue because the price is 0', () => {
    const [product] = testCarInsurance({
      name: 'Medium Coverage',
      sellIn: 2,
      price: 0,
    });
    expect(product.price).equal(0);
  });

  it('should not decrement the sellIn and price', () => {
    const [product] = testCarInsurance({
      name: 'Mega Coverage',
      sellIn: 2,
      price: 10,
    });
    expect(product.sellIn).equal(2);
    expect(product.price).equal(10);
  });

  it('should increement the price by 1', () => {
    const [product] = testCarInsurance({
      name: 'Full Coverage',
      sellIn: 2,
      price: 10,
    });
    expect(product.price).equal(11);
  });
});
