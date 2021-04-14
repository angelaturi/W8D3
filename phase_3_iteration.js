Array.prototype.bubbleSort = function() {
    let sorted = true;
    while (sorted) {
        sorted = false;
        for(let i = 0; i < this.length-1; i++) {
            if (this[i] > this[i+1]) {
                [this[i], this[i+1]] = [this[i+1], this[i]]
                sorted = true;
            }
        }
    }
    return this;
}

console.log([5, 4, 3, 2, 1].bubbleSort());