//Jack's version 
function unionRecursive(arr1,arr2,i=arr1.length-1,j=arr2.length-1,result=[]){
    if(arr1.length==0 && arr2.length==0){
        return result;
    }
    if(arr1[i]>arr2[j]){
        result.unshift(arr1[i]);
        // console.log(result)
        arr1.pop()
        return unionRecursive(arr1,arr2,i-1,j,result);
    }
    else if(arr1[i]<arr2[j]){
        result.unshift(arr2[j]);
        // console.log(result)
        arr2.pop()
        return unionRecursive(arr1,arr2,i,j-1,result);
    }
    else if(arr1[i]===arr2[j]){
        result.unshift(arr1[i]);
        // console.log(result)
        arr1.pop()
        arr2.pop()
        return unionRecursive(arr1,arr2,i-1,j-1,result)
    }
    if(arr2.length){
        result.unshift(arr2[j])
        arr2.pop()
        return unionRecursive(arr1,arr2,i,j-1,result)
    }
    if(arr1.length){
        result.unshift(arr1[i])
        arr1.pop()
        return unionRecursive(arr1,arr2,i-1,j,result);
    }
}
console.log(unionRecursive([1, 2, 2, 2, 7], [2, 2, 6, 6, 7, 7, 7])) //[1,2,2,2,6,6,7,7,7]