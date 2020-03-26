//print number to calculator screen
function numberToScreen(value) {
    current = document.getElementById("input").value;
    current = current + value;
    document.getElementById("input").value = current;
    console.log(current);
}

//clear calculator screen
function clearScreen() {
    document.getElementById("input").value = '';
}

//reset calculator screen on refresh
window.onload =  clearScreen();

//delete function
function deleteNumber(value) {
    value = document.getElementById("input").value;
    document.getElementById("input").value = current.substr(0, value.length - 1);   
    console.log(value); 
}

//calculate function
function calculate() {
    const values = document.getElementsByClassName("number.").parseInt(value);
    const ans = values + values;
    console.log(ans);
}

//add function
function add(x, y) {
    console.log(x + y)
}

    
