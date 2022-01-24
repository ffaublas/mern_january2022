// STEVE'S RECURSIVE VERSION
const intersect = (arr1, arr2, oneIndex=0, twoIndex=0,array = []) => {
    if(oneIndex >= arr1.length || twoIndex >= arr2.length)return array
    if(arr1[oneIndex]==arr2[twoIndex]){
        array.push(arr1[oneIndex])
        oneIndex++
        twoIndex++
        return intersect(arr1, arr2, oneIndex, twoIndex, array)
    }
    if(arr1[oneIndex] < arr2[twoIndex]){
        oneIndex++
        return intersect(arr1, arr2, oneIndex, twoIndex, array)
    }
    else{
        twoIndex++
        return intersect(arr1, arr2, oneIndex, twoIndex, array)
    }
}

let array1 = [1,2,3,3,4,5,6]
let array2 = [2,3,3,5,5,6]
console.log(intersect(array1, array2))