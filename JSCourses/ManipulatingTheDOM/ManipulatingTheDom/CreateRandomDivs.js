var createDivsFunc = (function () {
    var i = 0;
    var divsNum = document.getElementById('num').value;
    while(divsNum > 0) {
        var crDiv = document.createElement('div');
        var style = crDiv.style;
        style.width = Math.floor(20 + Math.random() * 81) + 'px';
        style.height = Math.floor(20 + Math.random() * 81) + 'px';
        style.backgroundColor = getRandomColor();
        style.color = getRandomColor();
        
        style.position = 'absolute';
        style.marginLeft = Math.floor(25 + Math.random() * 600) + 'px';
        style.marginTop = Math.floor(25 + Math.random() * 600) + 'px';
        style.borderRadius = Math.floor(3 + Math.random() * 13) + 'px';
        crDiv.innerHTML = '<strong>div</strong>';
        crDiv.style.border = Math.floor(1 + Math.random()*21) + 'px ' + 'solid black';
        style.borderColor = getRandomColor();
        document.body.appendChild(crDiv);
        divsNum--;
    }
});

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
};