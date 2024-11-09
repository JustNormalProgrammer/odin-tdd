export default function analyzeArray(arr){
    if(arr.length === 0) return {};
    return {
        average: calculateAvg(arr),
        min: calculateMinMax(arr)[0],
        max: calculateMinMax(arr)[1],
        length: arr.length 
    }
}
function calculateAvg(arr){
    let sum = arr.reduce((acc, value) => acc + value, 0);
    return sum/arr.length;
}
function calculateMinMax(arr){
    let min = arr[0];
    let max = arr[0];
    arr.forEach(element => {
        if(element < min){
            min = element;
        }
        if(element > max){
            max = element;
        }
    });
    return [min, max];
}