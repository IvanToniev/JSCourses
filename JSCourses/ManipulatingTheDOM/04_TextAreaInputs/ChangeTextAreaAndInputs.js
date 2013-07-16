var firstColor = document.getElementById('firstColor');
var secondColor = document.getElementById('secondColor');
var txtArea = document.getElementById('txtArea');

function changeFontColor() {
    txtArea.style.color = firstColor.value;
};

function changeBgColor() {
    txtArea.style.backgroundColor = secondColor.value;
}