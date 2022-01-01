const sumAll = function(...args) {
    const arr = args

    if (!Number.isInteger(arr[0]) || !Number.isInteger(arr[1])) return "ERROR";

    const lower = Math.min(arr[0], arr[1]);
    const upper = Math.max(arr[0], arr[1]);
    

    if(lower < 0 || upper < 0) return 'ERROR'

    let total = 0;

    for (let i = lower; i <= upper; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
