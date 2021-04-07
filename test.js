// you can change this value in order to test.
const values = [4, 8, 0, 9, 2, 5, 0, 3, 3, 0];

// function to move the zeros at the end of the array
function moveZeros(arr) {
  return arr.sort((a, b) => (a === 0) - (b === 0));
}

// function to remove the zeros, using filter and x as a boolean knowing that 0 is false in a simple comparision
function removeZeros(arr) {
  return arr.filter((x) => x);
}

// function to add 1 to the array, first of all I joined all the values of the array, making it a string, then with the plus at the begining I turned it into
// a number so i cann add 1 to that, then I made it again a string with the "" a the begining, splited with "" to separate all the chars and then mapped them 
// to turn all the elements to numbers.
// This also could be done with arr[arr.length -1]++, but i wanted to do the array conversion to an integer and sum 1 to the whole number as it says the problem.
function addOne(arr) {
    return ("" + (+arr.filter((x) => x).join("") + 1)).split("").map((x) => +x);
}

let newValues = moveZeros(values);
console.log(newValues);
newValues = removeZeros(newValues);
console.log(newValues);
newValues = addOne(newValues);
console.log(newValues);
