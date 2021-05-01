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

  it('should the price is 0', () => {
    const [product] = testCarInsurance({
      name: 'Medium Coverage',
      sellIn: -1,
      price: 1,
    });
    expect(product.price).equal(0);
  });

  it('Mega Coverage - should not decrement the sellIn and price', () => {
    const [product] = testCarInsurance({
      name: 'Mega Coverage',
      sellIn: 2,
      price: 80,
    });
    expect(product.sellIn).equal(2);
    expect(product.price).equal(80);
  });

  it('Full Coverage - should increment the price by 1', () => {
    const [product] = testCarInsurance({
      name: 'Full Coverage',
      sellIn: 2,
      price: 10,
    });
    expect(product.price).equal(11);
  });

  it('Special Full Coverage - should increment the price by 1', () => {
    const [product] = testCarInsurance({
      name: 'Special Full Coverage',
      sellIn: 15,
      price: 10,
    });
    expect(product.price).equal(11);
  });

  it('Special Full Coverage - should increment the price by 2', () => {
    const [product] = testCarInsurance({
      name: 'Special Full Coverage',
      sellIn: 10,
      price: 10,
    });
    expect(product.price).equal(12);
  });

  it('Special Full Coverage - should increment the price by 3', () => {
    const [product] = testCarInsurance({
      name: 'Special Full Coverage',
      sellIn: 5,
      price: 10,
    });
    expect(product.price).equal(13);
  });

  it('Special Full Coverage - should the price is 0', () => {
    const [product] = testCarInsurance({
      name: 'Special Full Coverage',
      sellIn: 0,
      price: 10,
    });
    expect(product.price).equal(0);
  });

  it('Special Full Coverage - should the price is 50', () => {
    const [product] = testCarInsurance({
      name: 'Special Full Coverage',
      sellIn: 3,
      price: 48,
    });
    expect(product.price).equal(50);
  });
});
