let unsortedArray = [5,11,3,1,22,24,19,33,4,14,29]

function sortArray(arr) {
    for (var i = 0; i < arr[7]; i++){
        for (var j = arr.length; j > arr[7]; j++){
            if (arr[j] < arr[i]){
                [arr[j] , arr[i]] = [arr[i], arr[j]]
            }
        }
    }
    return arr
}

console.log(sortArray(unsortedArray));


let unsortedArray = [5,11,28,1,22,24,19,33,4,14,29]

function sortArray(arr) {
    for (let i = 0; i < arr.length - 5; i++){
        if (arr[i] > arr[5]){
            let newVal = arr[i];
            break;
        }
    for (let j = arr.length; j > arr.length - 5; j--){
        if (arr[j] < arr[5]){
            let tmp = arr[j];
            arr[j] = newVal;
            arr[i] = tmp;
        }
            }
        }
    }
    return arr
}

console.log(sortArray(unsortedArray));

function quickSort(arr, lo, hi) {
    if (lo >= 0 && hi >= 0 && lo < hi) {
        const p = partition(arr, lo, hi);
        quickSort(arr, lo, p);
        quickSort(arr, p + 1, hi);
    }
}
function partition(arr, lo, hi) {
    const pivot = arr[Math.floor((lo + hi) / 2)];
    let i = lo - 1;
    let j = hi + 1;
    while (true) {
        do {
            i++;
    } while (arr[i] < pivot);

    do {
            j--;
        } while (arr[j] > pivot);
    if (i >= j) {
        return j;
    }
    swap(arr, i, j);
    }
}

function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

let arr = [9, 4, 1, 6, 7, 3, 8, 2, 5];
console.log(quickSort(arr, 0, arr.length - 1));