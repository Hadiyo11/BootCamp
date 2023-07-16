let arr = [];
let rows = 30;
let cols = 15;
let tempArr = [];
for ( let i=0; i<rows; i++ ){
    tempArr = [];
    for ( let x=0; x<cols; x++){
        tempArr.push(i*x);
    }
    arr.push(tempArr);
}
console.log(arr);
console.table(arr);