// mutable nature of js objects
let a = { name: "Aries" };
let b = { ...a };
// helps no to change the original object also object.assign can be used

b.name = "ifa";

console.log(a); // { name: "Aries" }
// this happens beacause object are reference types
console.log(b);
