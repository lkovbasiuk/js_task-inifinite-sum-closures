'use strict';

/***
 * @return {function}
 */
function makeInfinityAdder() {
  const adder = (a) => {
    let amount = a;

    if (a === undefined) {
      return 0;
    }

    return function nextAdder(b) {
      if (b === undefined) {
        return amount;
      }

      amount += b;

      return nextAdder;
    };
  };

  return adder;
}

module.exports = makeInfinityAdder;
