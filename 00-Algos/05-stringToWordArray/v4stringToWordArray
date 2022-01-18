function stringToWordArray(str){
    let temp = '';
    let arr = [];
    for(i=0;i<str.length;i++){
        if(str[i]===' ' && (str[i-1]===' ' || i===0)){
            continue;
        }
        if(str[i]===' ' || str[i]===str[str.length-1]){
            arr.push(temp);
            temp = '';
        }
        else{
            temp += str[i]
        }
    }
    return arr;
}

console.log(stringToWordArray("    Welcome      to     week     two!     "));