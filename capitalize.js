export default function capitalize(string){
    const firstChar = string[0];
    return firstChar.toUpperCase() + string.slice(1);
}