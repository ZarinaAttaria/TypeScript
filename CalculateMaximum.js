function calculateMaximum(arr) {
    var maximumValue = arr[0];
    var i;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > maximumValue) {
            maximumValue = arr[i];
        }
    }
    return maximumValue;
}
console.log(calculateMaximum([1, 2, 3, 4]));
