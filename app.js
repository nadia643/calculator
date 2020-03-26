//print number to calculator screen
function numberToScreen(value) {
    current = document.getElementById("input").value;
    current = current + value;
    document.getElementById("input").value = current;
}

//clear calculator screen
function clearScreen() {
    document.getElementById("input").value = '';
}

//reset calculator screen on refresh
window.onload =  clearScreen();


function calculate() {
    const values = document.getElementsByClassName("number.").parseInt(value);
    const ans = values + values;
    console.log(ans);
}

    
