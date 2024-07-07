function number(num) {
var textbox = document.getElementById('number1');
var current = textbox.value;


if (current == 0){
    textbox.value = num;
}
else{

textbox.value = current + num;
}
}
function clearInput() {
    document.getElementById('number1').value = 0;
    document.getElementById('operation-input').value = 0;
    document.getElementById('previous').value = 0;
}