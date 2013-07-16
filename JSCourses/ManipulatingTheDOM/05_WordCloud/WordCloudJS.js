var output = document.getElementById('output');
var inputData = document.getElementById('textInput').value;
var split = [];
var minSize = document.getElementById('minSize').value;
var maxSize = document.getElementById('maxSize').value;
split = inputData.split(" ");
 
function showCloud() {
    var i=0;
   // output.style.fontSize(randomSize());
    for (i = 0; i < split.length; i++) {
        output.innerHTML += split[i] + " ";
    }
    output.innerHTML.trim();
};

//function randomSize() {
 //    var num =   Math.floor(1 + minSize + Math.random() * (maxSize + 1))/10;
 //    return num;
//};