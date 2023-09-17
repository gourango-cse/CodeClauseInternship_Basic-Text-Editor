// Get elements from the DOM
const editorText = document.getElementById('editor-text');
const saveButton = document.getElementById('save-button');

// Function 
function f1(){
    document.getElementById("textarea").style.fontWeight="bold";
  }
  function f2(){
    document.getElementById("textarea").style.fontStyle = "italic";
  }
  function f3(){
    document.getElementById("textarea").style.textAlign = "left";
  }
  function f4(){
    document.getElementById("textarea").style.textAlign = "center";
  }
  function f5(){
    document.getElementById("textarea").style.textAlign = "right";
  }
  function f6(){
    document.getElementById("textarea").style.textTransform = "uppercase";
  }
  function f7(){
    document.getElementById("textarea").style.textTransform = "lowercase";
  }
  function f8(){
    document.getElementById("textarea").style.textTransform = "capitalize";
  }
  function f9(){
    document.getElementById("textarea").style.fontWeight = "normal";
    document.getElementById("textarea").style.textAlign = "left";
    document.getElementById("textarea").style.fontStyle = "normal";
    document.getElementById("textarea").style.textTransform = "capitalize";
    document.getElementById("textarea").value=" ";
  }
  // JavaScript functions to increase and decrease font size
 function increaseFontSize() {
    changeFontSize(2); // You can adjust the increment value
}

function decreaseFontSize() {
    changeFontSize(-2); // You can adjust the decrement value
}

function changeFontSize(value) {
    var content = document.getElementById("textarea");
    var currentSize = window.getComputedStyle(textarea, null).getPropertyValue('font-size');
    var newSize = (parseFloat(currentSize) + value) + "px";
    textarea.style.fontSize = newSize;
}
// Function to save the text to a file
function saveTextToFile(text) {
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'text.txt';
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Event listener for the save button
saveButton.addEventListener('click', () => {
    const textToSave = editorText.value;
    saveTextToFile(textToSave);
});

 