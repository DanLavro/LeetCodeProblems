// Time complexity: O(n log n)
// Space complexity: O(1)
function maximumUnits(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let totalUnits = 0;
  for (let i = 0; i < boxTypes.length && truckSize > 0; i++) {
    const [numBoxes, unitsPerBox] = boxTypes[i];

    const boxesToLoad = Math.min(truckSize, numBoxes);

    totalUnits += boxesToLoad * unitsPerBox;
    truckSize -= boxesToLoad;
  }

  return totalUnits;
}
