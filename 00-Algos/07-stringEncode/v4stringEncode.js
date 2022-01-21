// Corey's version 
function strEncode(str){
    let strObj = {}
    let result = ""
    
    if (str.length==0) {
        return null;
    }
    for (let i=0;i<str.length;i++) {
        strObj[str[i]]?strObj[str[i]]=strObj[str[i]]+1:strObj[str[i]]=1;
    }
    for (let item in strObj) {
        if (item != " ") {
            result += item;
            result += strObj[item];
        }
    }
    return result;
}
console.log(strEncode("aaaabcccddddd")) //a4b1c3d5
console.log(strEncode("abcccddeeeee")) //a1b1c3d2e5
console.log(strEncode("abcde")) //a1b1c1d1e1
console.log(strEncode("")) //null
console.log(strEncode("aaab c d eee    fghhhhh")) //a3b1c1d1e3f1g1h5