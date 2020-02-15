# Quick-math
[![codecov](https://codecov.io/gh/Apoloser/quick-math/branch/master/graph/badge.svg)](https://codecov.io/gh/Apoloser/quick-math)
[![Build Status](https://travis-ci.org/Apoloser/quick-math.svg?branch=master)](https://travis-ci.org/Apoloser/quick-math)
### What is this
Implementation of [shunting-yard algorithm](http://en.wikipedia.org/wiki/Shunting-yard_algorithm) to calculate string as mathematical expression.
### How does this work?
While passing expression as infix mathematical expression QuickMath will parse it and transform into [RPN](https://en.wikipedia.org/wiki/Reverse_Polish_notation). After this you can simply calculate result of RPN by calling calculate method. If your expression contains syntax errors class will throw exception.
### Example
```typescript
import { QuickMath } from 'quick-math';
const data = '5/2+25-3^2';

try {
  const expression = new QuickMath(data);
  console.log(expression.calculate() === QuickMath.calculate(data));
} catch (e) {
  console.error(e);
}
```
