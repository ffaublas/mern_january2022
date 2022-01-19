// From Corey
// let str = "abcdefg"; //string length 7
// let n = 18; //offset

// console.log(n % str.length);

// find out str lenght, get remainder compared to offset
function rotateString(str, n) {
    n = n % str.length; //offset
    
    let newStr = str.substring(str.length-n,str.length) //use substring to grab the end of the original string characters (up until offset #)
    // console.log(newStr)


    for (let i=0;i<str.length-n;i++) { //grab the beginning of the original string, up until the offset where we started
        newStr += str[i];
    }

    return newStr;


}

console.log(rotateString("abcdefgh",4))


function isRotation(str1,str2){

    if (str1.length != str2.length) {
        return false;
    }

    for (let i=0;i<str1.length;i++) {
        let rotatedStr = rotateString(str1,i)
        // console.log(rotatedStr)
        if (rotatedStr===str2) {
            return true;
        }
    }
    return false;
}

console.log(isRotation("abcde", "deabc")) //true
console.log(isRotation("abcde", "edacb")) //false