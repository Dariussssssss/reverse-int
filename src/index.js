module.exports = function reverse(n) {
    n = String(n);
    let result = "";
    for (let i = 0; i < n.length; i++) {
        result = `${n[i]}${result}`;
    }
    result = parseInt(result);
    return result;
    //     let result = 0;
    // n = Math.abs(n);
    //     while (n) {
    //         result = result * 10 + (n % 10);
    //         n = Math.floor(n / 10);
    //     }
    //     return result;
};
