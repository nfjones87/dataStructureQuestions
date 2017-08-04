// questions

// Write an algorithm which searches through a 2D array, and 
//whenever it finds a zero should set the entire row and column to zero.


//loop through the first array
//loop through the second array
//if [i][j] = 0;
// [i] === 0;

function arraySwapper(arr) {
    let rows=[];
    let columns=[];
    for(let i=0; i<arr.length; i++) {
        let col = arr[i];
        for(let j=0; j<col.length; j++) {
            let item = col[j];
            if(col[j] === 0) {
                rows[i] = true;
                columns[j] = true;
            }
        }
    }

    for(let i=0; i<arr.length; i++) {
        let col = arr[i];
        for(let j=0; j<col.length; j++) {
            if(rows[i] || columns[j]) {
                col[j] = 0;
            }
        }
    }
    return arr;
}


// console.log(arraySwapper([[0,1,2,4],[3,2,4,0],[1,2,3,4],[2,3,0,1]]));

function continousLargeNum(arr){
  let maxSum = 0;
  let max = -1000;
  for(let i = 0; i < arr.length; i++){

    if(arr[i] > 0){
      maxSum += arr[i];
      if(max < maxSum){
        max = maxSum;
      }
      if(arr[i+1] !== undefined && arr[i+1] < 0){
        maxSum = 0;
      }
    }
  }
  return max;
}

console.log(continousLargeNum([2,-2,1,4,5,-6,2,10,11]));

