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


console.log(arraySwapper([[0,1,2,4],[3,2,4,0],[1,2,3,4],[2,3,0,1]]));



