// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     let len = str.length;
//     for(let i=0;i<len;i++){
//         str = str.slice(0,i)+str.slice(-1)+str.slice(i,-1);
//     }
        
//     return str;
// }

// function reverse(str) {
//     let len = str.length;
//     return str.split('').reverse().join('');
// }

// function reverse(str){
//     let reversed = '';
//     for (let charachter of str){
//         reversed = charachter + reversed;
//     }
//     return reversed;
// }

function reverse(str){
    
    return str.split('').reduce((reversed,character) => {
        return character + reversed;
    }, '');
}

module.exports = reverse;
