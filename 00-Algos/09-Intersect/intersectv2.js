// Corey's version
const intersect = (arr1,arr2) => {
    let i=0;
    let j=0;
    let results = [];

    while (i<arr1.length && j<arr2.length) {
        if (arr1[i]<arr2[j]) {
            i++;
        }
        else if (arr1[i]>arr2[j]) {
            j++;
        }
        else {
            results.push(arr1[i]);
            j++;
            i++;
        }
    }
    return results;
}

let x=[1,2,3,3,4,4,5,6];
let y=[2,3,3,4,4,4,5];

console.log(intersect(x,y));