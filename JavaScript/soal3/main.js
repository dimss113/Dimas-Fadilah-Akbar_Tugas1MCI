let numpyArgwhere = (arr, condition) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      for (let k = 0; k < arr[i][j].length; k++) {
        if (condition(arr[i][j][k])) {
          result.push([i, j, k]);
        }
      }
    } 
  }
  return result;
}


let arr = [
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ],
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
];
let result = numpyArgwhere(arr, function(x) { return x > 0; });
console.log(result);