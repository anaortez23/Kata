//MY SOLUTION
function makeNegative(num) {
    return num > 0 ? num * -1 : num
}


//CLEVER SOLUTION
function makeNegative(num) {
    return -Math.abs(num);
}



//MY SOLUTION REFACTORED
function makeNegative(num) {
    return num < 0 ? num : -num;
}