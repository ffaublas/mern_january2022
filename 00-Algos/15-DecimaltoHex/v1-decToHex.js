// Allen's version 
//https://www.rapidtables.com/convert/number/decimal-to-hex.html

const base10convert = (num, base) => {

    let output = ''
    while (num > 0) {
        let quo = Math.floor(num / base.length)
        let rem = num % base.length
        // console.log('quo', quo, 'rem', rem)
        output = (base[rem]) + output;
        num = quo
    }
    console.log(output);
}

let hexdec = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
base10convert(30, hexdec) // 1e

let bi = [0, 1]
base10convert(4, bi) // 100

let sept = [0, 1, 2, 3, 4, 5, 6]
base10convert(22, sept) // 31