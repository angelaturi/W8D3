Array.prototype.myEach = function(callback) {
    for(el of this) {
        callback(el);
    }
}

// arr = [1,2,3,4];

// let result = [];
// callback = function(ele) { 
//     result.push(ele*2);
// }

// arr.myEach(callback);

// console.log(result);

Array.prototype.myMap = function(callback) {
    // let i = 0;
    // while (i < this.length) {
    //     this[i] = callback(this[i]);
    //     i++;
    // }
    let result = [];
    this.myEach(function(ele) {
        result.push(callback(ele));
    });
    return result;
}

// console.log([1,2,3,4].myMap(function(a){return a*400}))

Array.prototype.myReduce = function(callback, init) {
//     // start by setting arr = this
//     // check to see if init === undefined
//         // init = arr[0]
//         // arr = arr.slice(1)

    let arr = this;
    if (init === undefined) {
        init = arr[0];
        arr = arr.slice(1);
    }

    arr.myEach(function(ele) {
        init = callback(init, ele)
    });
    return init;
}

// console.log([1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// }));

// console.log([1, 2, 3].myReduce(function (acc, el) {
//     return acc + el;
// }, 25));


// const numbers = [1, 2, 3, 4]
// console.log(numbers.slice(1));