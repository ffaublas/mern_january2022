/*
given an unsorted array, create a function that implement insertion sort to sort the array. You are not allowed to create a new array and you have to modify the original input aray

https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/
*/


function insertionSort(arr){
    for (i=1;i<arr.length;i++){
        let check = arr[i];
        let j = i-1;
        while(arr[j]>check && j > -1){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1]=check;
    }
    return arr;
}



console.log(insertionSort([5,7,2,9,1,4]))
console.log(insertionSort([9,8,7,6,5,4,3,2,1]))