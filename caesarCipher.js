export default function caesarCipher(string, shift){
    const alphabetLower = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let result = [];
    for(let i = 0; i < string.length; i++){
        if(alphabetLower.includes(string[i])){
            result.push(shiftLetter(alphabetLower, string[i], shift));
        }
        else if(alphabetUpper.includes(string[i])){
            result.push(shiftLetter(alphabetUpper, string[i], shift));
        } else{
            result.push(string[i]);
        }
    }
    return result.join('');
}
function shiftLetter(arr, letter, shift){
    const idx = arr.indexOf(letter);
    return arr[(idx + shift+arr.length)%arr.length];
}