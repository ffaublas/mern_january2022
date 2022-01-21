// Jack's version
function strEncode(str) {
    let string = '';
    let i = 0;
    while (i < str.length) {
        let count = 1;
        let j = i + 1;
        while (str[i] === str[j]) {
            j++
            count++
        }
        if(/^[a-zA-Z]+$/.test(str[i])){
            string += str[i] + count;
        }
        i = j;
    }
    return string;
}
console.log(strEncode("aaaaaaaaabcccccddddd       "))