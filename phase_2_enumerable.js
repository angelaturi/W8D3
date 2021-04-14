Array.prototype.myEach = function(callback) {
    for(el of this) {
        callback(el);
    }
}

arr = [1,2,3,4];

let result = [];
callback = function(ele) { 
    result.push(ele*2);
}

arr.myEach(callback);

console.log(result);
