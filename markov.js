"use strict";
/** Textual markov chain generator. */

const _ = require('lodash');

class MarkovMachine {
  /** Build markov machine; read in text.*/

  constructor(text) {
    // A "word" will also include any punctuation around the word, so this will
    // include things like "The", "cat", "cat.".
    this.words = text.split(/[ \r\n]+/);
    this.chains = this.getChains();
  }

  /** Get markov chain: returns Map of Markov chains.
   *
   *  For text of "The cat in the hat.", chains will be:
   *
   *  {
   *   "The": ["cat"],
   *   "cat": ["in"],
   *   "in": ["the"],
   *   "the": ["hat."],
   *   "hat.": [null]
   *  }
   *
   * */

  getChains() {
    let chains = {};
    for (let i = 0; i < this.words.length; i++) {
      let word = this.words[i];
      let nextWord = this.words[i + 1];
      if (nextWord === undefined) {
        nextWord = null;
      }
      chains[word] = chains[word] === undefined
        ? [nextWord]
        : chains[word].concat([nextWord]);
    }
    return chains;
  }

  /** Return random text from chains, starting at the first word and continuing
   *  until it hits a null choice. */

  getText() {
    // TODO: implement this!
    // - start at the first word in the input text
    // - find a random word from the following-words of that
    // - repeat until reaching the terminal null

    let word = this.words[0];
    let text = word;
    let nextWord;
    while (word !== null) {
      nextWord = _.sample(this.chains[word]);
      if (nextWord !== null) {
        text += (" " + nextWord);
      }
      word = nextWord;
    }
    return text;
  }
}
