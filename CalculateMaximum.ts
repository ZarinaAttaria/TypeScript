function calculateMaximumNumber(arr: number[]): number {
  let maximumValue: number = arr[0];
  let i: number;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > maximumValue) {
      maximumValue = arr[i];
    }
  }
  return maximumValue;
}

console.log(calculateMaximumNumber([1, 2, 3, 4]));
