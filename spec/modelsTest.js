const expect = require('chai').expect;

const { Product, CarInsurance } = require('../src/models');

describe('modelsTest', () => {
  it('should not have products', () => {
    const coTest = new CarInsurance();
    const products = coTest.updatePrice();
    expect(products).to.be.empty;
  });

  it('should decrement the price by 1', () => {
    const coTest = new CarInsurance([new Product('Medium Coverage', 2, 10)]);
    const [product] = coTest.updatePrice();
    expect(product.price).equal(9);
  });

  it('should decrement the price by 2', () => {
    const coTest = new CarInsurance([new Product('Medium Coverage', 0, 10)]);
    const [product] = coTest.updatePrice();
    expect(product.price).equal(8);
  });

  it('should not decrement the price', () => {
    const coTest = new CarInsurance([new Product('Full Coverage', 2, 10)]);
    const [product] = coTest.updatePrice();
    expect(product.price).equal(10);
  });

  it('should continue because the price is 0', () => {
    const coTest = new CarInsurance([new Product('Medium Coverage', 2, 0)]);
    const [product] = coTest.updatePrice();
    expect(product.price).equal(0);
  });

  it('should not decrement the sellIn', () => {
    const coTest = new CarInsurance([new Product('Mega Coverage', 2, 10)]);
    const [product] = coTest.updatePrice();
    expect(product.sellIn).equal(2);
  });
});
