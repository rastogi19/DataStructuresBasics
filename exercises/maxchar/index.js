// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charsHash = {};
    let maxCount = 0;
    let maxChar;
    // for (const char of str){
    //     if (!(char in charsHash)) {
    //         charsHash[char] = 1;
    //     }else {
    //         charsHash[char]++;
    //     }
    // }
    for (const char of str){
        charsHash[char] = charsHash[char] + 1 || 1;
    }
    for (const key in charsHash){
        if(charsHash[key] > maxCount){
            maxCount = charsHash[key];
            maxChar = key;
        }
    }
    return maxChar;
}

module.exports = maxChar;
