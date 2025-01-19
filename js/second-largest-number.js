function secondLargestNumber(arr){
    let largest = arr[0];
    let secondLargestNumber = -Infinity;

    for(let i = 1; i < arr.length; i++){
        if (arr[i > largest]) {
            secondLargestNumber = largest;
            largest = arr[i];
        } else if(arr[i] < largest && arr[i] > secondLargestNumber){
            secondLargestNumber = arr[i];
        }
    }
    return secondLargestNumber;
}

const array = [10, 5, 20, 8, 12];
const secondLargestNumber = secondLargestNumber(array);
console.log("Second Largest Number:", secondLargestNumber);