const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Rewrite Array forEach mehthod 
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

arr.myForEach((item, index) => console.log(item + ' at index ' + index));

// Rewrite Array map method
Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}
console.log('Using myMap method');
const newArr = arr.myMap((item, index) => item * 2);
console.log(newArr);

// Rewrite Array filter method
Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}
console.log('Using myFilter method for filtering even numbers');
const filteredArr = arr.myFilter((item, index) => item % 2 === 0);
console.log(filteredArr);

// Rewrite Array reduce method
Array.prototype.myReduce = function(callback, initialValue) {
    let accumulator = initialValue ?? 0;
    for (let i = 0; i < this.length; i++) {
        if (i === 0 && accumulator === 0) {
            accumulator = this[i];
            continue;
        }
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
}

console.log('Using myReduce method for summing all elements in the array');
const sum = arr.myReduce((accumulator, item) => accumulator + item, 0);
console.log(sum);

