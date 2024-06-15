let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function filterArray(arr, callback) {
    function callback(ele) {
        if (ele % 2 === 0) {
            console.log("False");
        } else {
            console.log("True");
        }

        return ele;
    }


    let filterArray = arr.filter(callback)
    return filterArray;
}

let filterNumbers = filterArray(numbers)
console.log(filterNumbers);