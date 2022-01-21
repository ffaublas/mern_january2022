// From Kelvin, TA
const decode = str => {
    let decodeObj = {}
    let result = ""
    //getting the array of numbers in the string
    numArray = str.match(/\d+/g)
    for (let i = 0; i < str.length; i++) {
        //getting the letter and setting it in our object
        if(isNaN(str[i])) 
            //setting the letter as the prop and the value as our shifted array
            decodeObj[str[i]] = numArray.shift()         
    }
    //iterate obj to write out result
    for (let item in decodeObj) {
        result += item.repeat(decodeObj[item]);
    }
    return result
}
console.log(decode("a3b2c14d1"));