//https://www.rapidtables.com/convert/number/decimal-to-hex.html

// Jack's version

function decToHex(number) {
    let conversion = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    let result = '';
    while (number / 16 > 0) {
        result = conversion[number % 16] + result;
        number = Math.floor(number / 16)
    }
    return result;
}