// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let newArr = [];
//     while(array.length > 0){
//         newArr.push(array.splice(0,size));
//     }
//     // console.log(newArr);
//     return newArr;
// }

function chunk(array, size) {
    let newArr = [];
    for(let element of array){
        const last = newArr[newArr.length-1];
        if(!last || last.length === size){
            newArr.push([element]);
        } else {
            last.push(element);
        }
    }
    return newArr;
}

module.exports = chunk;
