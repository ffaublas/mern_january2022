// Allen's version 
 //loop through look at each letter
    // check edge casees like first or last position and handle them 
    // check the preceding one if they match
      // if they match notate/count the match, 
      // if not match then add the count to outputStr
        // add count in
        // reset count
        // add new letter to output
    // exit loop, add remaining count in

function strEncode(str) {
    let count = 1;
    let output = "";
    
    for (let i = 0; i < str.length; i++) {
        if (i === 0) {
        output = str[i]; 
        } else if (str[i] === str[i - 1]) {
        count++;
        } else if (str[i] !== str[i - 1]) {
        ab;
        output += count; 
        count = 1; 
        output += str[i]; 
        }
    }
    output += count; 
    return output;
    }
    
    console.log(strEncode("aaaabcccddddd")) //a4b1c3d5
    console.log(strEncode("abcccddeeeee")) //a1b1c3d2e5