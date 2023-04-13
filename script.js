function displayData(n){
    result.value+=n;
}
function allClear(){
    result.value="";
}
function backspace(){
    result.value=result.value.slice(0,-1)
}
function evalt(){
    result.value=eval(result.value);
}