function binarySearch(arr: number[], target: number): number {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } 
        else {
            right = mid - 1;
        }
    }

    return -1;
}

let arr = [10, 20, 30, 40, 50];

console.log(binarySearch(arr, 30));
