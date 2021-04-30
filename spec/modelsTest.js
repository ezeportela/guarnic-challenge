const expect = require('chai').expect;

const { Product, CarInsurance } = require('../src/models');

describe('modelsTest', () => {
  it('should decrement the price', () => {
    const coTest = new CarInsurance([new Product('Medium Coverage', 2, 10)]);
    const products = coTest.updatePrice();
    expect(products[0].price).equal(9);
  });
});
