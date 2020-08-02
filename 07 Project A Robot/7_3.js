// Persistent group

class PGroup {
  constructor(group) {
    this.group = group;
  }
  
  add(val) {
    if(!this.has(val)) {
      return new PGroup(this.group.concat([val]));
    } else return this;
  }
  
  delete(val) {
    if(this.has(val)) {
      return new PGroup(this.group.filter(el => el !== val));
    } else return this;
  }
  
  has(val) {
    return this.group.includes(val);
  }
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false