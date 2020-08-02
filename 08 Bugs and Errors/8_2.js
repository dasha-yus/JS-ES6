const box = {
  locked: true,
  unlock() { this.locked = false; },
  lock() { this.locked = true;  },
  _content: [],
  get content() {
    if (this.locked) throw new Error("Locked!");
    return this._content;
  }
};

function callFunc(body) {
  try {
    return body();
  } finally {
    box.lock();
  }
}

function withBoxUnlocked(body) {
  if (box.locked) {
  	box.unlock();
    callFunc(body);
  } else callFunc(body);
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
// → true