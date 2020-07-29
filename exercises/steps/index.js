// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     // console.log('n',n);
    
//     for (let i=0; i< n; i++) {
//         let steps = '';
//         for (let j=0; j< n; j++) {
//             // console.log(i,j);
//             if( j <= i  ) {
                
//                 steps += '#';
//                 // console.log('hash ',steps);
//             } else {
                
//                 steps += ' ';
//                 // console.log('space ',steps);
//             }
//         }
//         console.log(steps);
        
//         // console.log('enter',steps);
//     }
    
//     // console.log(steps);
// }

function steps(n, row = 0, stairs = '') {
    
    if(n === row){
        return;
    }

    if(n === stairs.length){
        console.log(stairs);
        return steps(n,row+1);
    }

    if(stairs.length <= row){
        stairs += '#';
        
    } else {
        stairs += ' ';

    }
    steps(n, row, stairs);
    
}

module.exports = steps;
