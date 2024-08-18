//Spam control function
console.log("Task 3: JS the String Builder function");
class StringBuilder {
  #value;

  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padStart(str) {
    this.#value = `${str}${this.#value}`;
  }

  padEnd(str) {
    this.#value += str;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}

//Tests
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
