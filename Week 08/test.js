// let string = "abababxaaa";
// let pattern = "abababx";

// // Compile
let array = Array(pattern.length).fill(0);
let x = 0;
for (let i = 1; i < pattern.length; i++) {
  if (string[i] === string[x]) {
    array[i] = x;
    x++;
  } else {
    while (x) {
      x = array[x];
      if (string[i] === string[x]) {
        break;
      }
    }
  }
}

function kmp() {
  let x = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === pattern[x]) {
      x++;
    } else {
      while (x) {
        x = array[x];
        if (string[x] === string[i]) {
          x++;
          break;
        }
      }
    }
    if (x >= array.length) return true;
  }
  return false;
}


// console.log(array);
// console.log(kmp());


let array = [0, 0, 0, 1, 2, 3, 0];
let pattern = "abababx";
let string = "aaaabababxaaaa";

let start = (char) => recursion(char, 0);
let finish = () => finish;

function recursion (char, index) {
  if (char === pattern[index]) {
    if (index + 1 === array.length) {
      return finish;
    }
    return (char) => recursion(char, index+1);
  }
  else if (index === 0) {
    return start;
  }
  else {
    // re-consume
    return recursion(char, array[index]);
  }
}

function findabababx() {
  let node = start;
  for (let char of string) {
    node = node(char);
  }
  return node === finish;
}

console.log(findabababx());