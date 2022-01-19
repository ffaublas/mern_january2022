// From Steve
function rotateString(str, distance) {
    let newString = '';
    distance = distance % str.length;
    for(let i=0;i<str.length;i++){
        newString += str[(str.length - distance + i) % str.length];
    }
    return newString;
}

console.log(rotateString('abcde', 2))

function isRotation(str1, str2){
    if(str1.length != str2.length){
        return false;
    }
    for(let i=0;i<str1.length;i++){
        let test=rotateString(str1, i);
        if(test===str2){
            return true;
        }
    }
    return false;
}

console.log(isRotation('Hello WOrld!', 'ld!Hello WOr'));