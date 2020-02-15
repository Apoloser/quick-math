import { QuickMath } from '../src';
import { Multiply, Percent, Pow } from '../src/classes/operators';
import { expect } from 'chai';

describe('Calculation', () => {
  it('Addition', () => {
    const obj = new QuickMath('221+1+5+2');
    expect(obj.calculate()).equal(229);
  });

  it('Subtraction', () => {
    const obj = new QuickMath('35-5-1-5');
    expect(obj.calculate()).equal(24);
  });

  it('Multiply', () => {
    const obj = new QuickMath('5*10*2');
    expect(obj.calculate()).equal(100);
  });

  it('Division', () => {
    const obj = new QuickMath('25/5/2');
    expect(obj.calculate()).equal(2.5);
  });

  it('Parentheses', () => {
    const obj = new QuickMath('((5+2)-5)*(50-11)*5');
    expect(obj.calculate()).equal(390);
  });

  it('Percent', () => {
    const obj = new QuickMath('(10-5%)+5*25%');
    expect(obj.calculate()).equal(10.75);
  });

  it('Pow', () => {
    const obj = new QuickMath('2^2*5-2');
    expect(obj.calculate()).equal(18);
  });

  it('Radical', () => {
    const obj = new QuickMath('√(2+2)+5');
    expect(obj.calculate()).equal(7);
  });
});
