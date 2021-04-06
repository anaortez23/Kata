//MY SOLUTION 
function positiveSum(arr) {
    let sum = arr.filter(num => num > 0 ).reduce(function (acc, currVal) { return acc + currVal}, 0)
    return sum
}

//WITH FOR LOOP
function positiveSum(arr) {
    var total = 0;    
    for (i = 0; i < arr.length; i++) {    // setup loop to go through array of given length
      if (arr[i] > 0) {                   // if arr[i] is greater than zero
        total += arr[i];                  // add arr[i] to total
    }
    }
    return total;                         // return total
}

//SHORT 
function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}