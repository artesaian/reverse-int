module.exports = function reverse (n) {
    let positiveNumber = Math.abs(n);
    let numberStr = positiveNumber.toString();
    let reversedStr = '';
    
    for (let i = numberStr.length - 1; i >= 0; i--) {
      reversedStr += numberStr[i];
    }
    
    let reversedNumber = parseInt(reversedStr, 10);
    
    return reversedNumber;
}
