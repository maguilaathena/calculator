function operation(oper) {
  document.getElementById('operation-input').value = oper;

  if(document.getElementById('previous').value != 0) {
     equal();
  }
  
  document.getElementById('previous').value = document.getElementById('number1').value;
  document.getElementById('number1').value = "";
    }

function equal(){
    var textbox = document.getElementById('number1');
    var previous = document.getElementById('previous').value;

    var operation = document.getElementById('operation-input').value;

    switch(operation){
    case '+':
       textbox.value = Number(previous) + Number(textbox.value);
       break;
    
    case '-':
        textbox.value = Number(previous) - Number(textbox.value);
        break;

    case '*':
            textbox.value = Number(previous) * Number(textbox.value);
            break;
            
    case '/':
        textbox.value = Number(previous) / Number(textbox.value);
        break;
    }
}