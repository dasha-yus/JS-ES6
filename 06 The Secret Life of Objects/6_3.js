// Iterable groups

class Group {
  constructor() {
    this.group = [];
  }
  
  add(val) {
    if(!this.has(val)) {
      this.group.push(val);
    }
  }
  
  delete(val) {
    if(this.has(val)) {
      var index = this.group.indexOf(val);
      delete this.group[index];
    }
  }
  
  has(val) {
    return this.group.includes(val);
  }
  
  static from(array) {
    var group = new Group();
    for(var i of array){
      group.add(i);
    }
    return group;
  }

  [Symbol.iterator]() {
  	return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
  	this.group = group;
  	this.position = 0;
  }

  next() {
    if(this.position < this.group.group.length) {
      var res = {value: this.group.group[this.position],
      			 done: false};
      this.position++;
      return res;
    } else return {done: true};
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c