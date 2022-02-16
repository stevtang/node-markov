const { MarkovMachine } = require("./markov.js");

describe("get markov chains from string", function () {
  test("chain from string is equal to chain given", function () {
    let chain = {
      cat: ["in"],
      in: ["the"],
      the: ["cat", "hat."],
      "hat.": ["hat.", null],
    };
    let testMarkov = new MarkovMachine("the cat in the hat. hat.");

    expect(chain).toEqual(testMarkov.chains); // same values so we use toEqual
  });
});
