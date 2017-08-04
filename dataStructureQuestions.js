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

//console.log(continousLargeNum([2,-2,1,4,5,-6,2,10,11]));




// Write an algorithm which will sum two numbers stored in linked lists, 
//where each node contains a single digit of the number.


function Node (value) {
    this.value = value;
    this.next = null;
};

function addLists (list1, list2) {
    let carry = 0;
    let newList, head;

    while(list1 || list2) {
        
        let add = (list1 && list1.value) + (list2 && list2.value) + carry;
        if (add >= 10) {
            carry = 1;
            add -= 10;
        } else {
            carry=0;
        }
        let node = new Node(add);
        if (head) {
            newList.next = node;
        } else {
            newList = node;
        }
        if(list1){
          list1 = list1.next;
        }
        if(list2){
          list2 = list2.next;
        }
    }

}

// Write an algorithm which will find 
// all pairs of number in an array which sum to a certain value.

//Inefficient
// function pairs(arr, value){
//   let resultObj = {};
//   for(let i = 0; i < arr.length; i++){
//     const otherValueArr = [...arr.slice(0,i), ...arr.slice(i+1)];
//     for(let j = 0; j < otherValueArr.length; j++){
//       const sum = otherValueArr[j] + arr[i];
//       if(value === sum){
//         if(!resultObj[arr[i]]){
//           resultObj[otherValueArr[j]] = arr[i];
//         }
//       }
//     }
//   }
//   return resultObj;
// }

//efficient
function pairs(arr, value){
  let resultObj = {};
  const pair = [];
  for(let i = 0; i< arr.length; i++){
    let item = arr[i];
    if(item in resultObj){
      pair.push([item, resultObj[item]]);
    }else{
      resultObj[value-item] = item;
    }
  }
  return pair;
}

const arr = [10, 15, 3, 2, 5, 20, 24, 1];
const value = 25; 
console.log(pairs(arr, value));

