function mergeSort(arr){
    if(arr.length == 1){
        return arr;
    }
    const halfIndex = arr.length/2;

    const firstHalf = arr.slice(0, halfIndex);
    const secondHalf = arr.slice(halfIndex);

    const sortedFirstHalf = mergeSort(firstHalf);
    const sortedSecondHalf = mergeSort(secondHalf);

    let finalArray = [];
    while(sortedFirstHalf.length > 0 || sortedSecondHalf.length > 0){
        if(sortedFirstHalf.length == 0){
            finalArray.push(sortedSecondHalf.shift());
        }else if(sortedSecondHalf.length == 0){
            finalArray.push(sortedFirstHalf.shift());
        }else if(sortedFirstHalf[0] <= sortedSecondHalf[0]){
            finalArray.push(sortedFirstHalf.shift());
        }else{
            finalArray.push(sortedSecondHalf.shift());
        }
    }
    console.log(finalArray);
    return finalArray;
}

const myArray = [8,5, 71, 73,72, 83, 99, 1, 22, 205, 4, 47];
console.log(mergeSort(myArray));