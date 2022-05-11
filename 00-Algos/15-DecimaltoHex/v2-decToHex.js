//https://www.rapidtables.com/convert/number/decimal-to-hex.html

// Steve's version

const dec2hex = num => {
    let array = []
    let result = ""
    while (num != 0) {

        if (num % 16 <= 9) {
            array.push(num % 16)
        }
        else if (num % 16 == 10) {
            array.push("A")
        }
        else if (num % 16 == 11) {
            array.push("B")
        }
        else if (num % 16 == 12) {
            array.push("C")
        }
        else if (num % 16 == 13) {
            array.push("D")
        }
        else if (num % 16 == 14) {
            array.push("E")
        }
        else if (num % 16 == 15) {
            array.push("F")
        }
        num = Math.floor(num / 16)
    }
    for (i = array.length - 1; i >= 0; i--) {
        result += array[i]
    }
    return result
}

console.log(dec2hex(35631)) // 8B2F
console.log(dec2hex(28))