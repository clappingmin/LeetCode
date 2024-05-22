/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const len = digits.length;
    let carry = false;
    
    for (let i = len -1; i>=0; i--) {
        
        if (carry) carry = false;
    
        const plusNum = digits[i] + 1;
        digits.splice(i, 1, plusNum % 10);
        
        if (plusNum < 10) return digits;
        else carry = true;
    }
    
    if (carry) return [1, ...digits];
    
    return digits
};