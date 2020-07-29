// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     console.log('start ',n);
//     let fib = -1;
//     let fibPre = -1;
//     let fibPrePre = -1;
//     for(let i= 0; i <= n; i++){
//         if (i === 0) {
//             fib = 0;
//         } else if (i === 1) {
//             fib = 1;
//             fibPre = fib;
//             fibPrePre = 0;
//         } else {
//             fib = fibPre + fibPrePre;
//             fibPrePre = fibPre;
//             fibPre = fib;
//             // console.log(fib);
//         }
//     }
//     console.log('end ',fib);
//     return fib;
// }

// function fib(n) {
//     let result = [0,1];
//     for(let i= 2; i <= n; i++){
//       result.push(result[i-1] + result[i-2]);
        
//     }
//     console.log('end ',result);
//     return result[n];
// }
// function fib(n) {
//     if(n < 2){
//         return n;
//     }
//     return (fib(n-1) + fib(n-2));
// }

function memoize(fn) {
    const cache = {};
    return function(...args){
        if(cache[args]){
            return cache[args];
        }
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    };
}
function slowFib(n) {
    if(n < 2){
        return n;
    }
    return (fib(n-1) + fib(n-2));
}
var fib = memoize(slowFib);


module.exports = fib;
