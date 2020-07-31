// Groups

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
    for(var i of array) {
      group.add(i);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false