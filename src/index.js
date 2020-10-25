module.exports = function reverse (n) {
    let reverseString = String(Math.abs(n)).split("").reverse().join("");
    return Number(reverseString);
}
