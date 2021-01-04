// Create empty set
const s = new Set();

// Add element to a set
// Set removes duplicates
s.add(12).add(15).add(12);
console.log(s);

// Add an array to set
const s1 = new Set([ 2, 4, 6, 3, 4, 2 ]);
console.log(s1);
console.log(Array.from(s1)); // Set to array
console.log(Array.of(1, 3, 4, 5));

// Add a string to set
const s2 = new Set('Welcome');
console.log(s2);
