﻿var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2d');
ctx.fillStyle = "#eee";

// House
drawRect(200, 150, 200, 200);

// Roof
ctx.beginPath();
ctx.moveTo(400, 150);
ctx.lineTo(300, 50);
ctx.lineTo(200, 150);
ctx.closePath();
ctx.fill();
ctx.stroke();

// Chimney
ctx.beginPath();
ctx.moveTo(360, 120);
ctx.lineTo(360, 70);
ctx.lineTo(340, 70);
ctx.lineTo(340, 120);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.strokeStyle = "#000";
ctx.lineWidth = 1;
drawEllipse(340, 65, 20, 7);

// Windows
ctx.strokeStyle = "#eee";
ctx.fillStyle = "#000";
drawWindow(215, 170, 70, 50);
drawWindow(315, 170, 70, 50);
drawWindow(315, 240, 70, 50);

// Door
ctx.strokeStyle = "#000";
ctx.fillStyle = "#eee";
drawRect(215, 270, 70, 80);
ctx.moveTo(215, 270);
ctx.arc(250, 270, 35, 0, Math.PI, true);
ctx.moveTo(250, 270);
ctx.lineTo(250, 350);
ctx.moveTo(240, 310);
ctx.arc(240, 310, 4, 0, Math.PI * 2, true);
ctx.moveTo(260, 310);
ctx.arc(260, 310, 4, 0, Math.PI * 2, true);
ctx.stroke();
ctx.fill();

// Head and Bike
ctx.fillStyle = 'eee';
ctx.strokeStyle = '000';
ctx.lineWidth = 4;
// Head
drawEllipse(100, 400, 100, 90);
// Eyes
drawEllipse(120, 420, 20, 10);
ctx.fillStyle = '000';
drawEllipse(125, 420, 4, 10);
ctx.fill();
ctx.fillStyle = 'eee';
drawEllipse(160, 420, 20, 10);
ctx.fillStyle = '000';
drawEllipse(165, 420, 4, 10);
ctx.fill();
// Nouse
ctx.moveTo(150, 435);
ctx.lineTo(135, 460);
ctx.moveTo(135, 460);
ctx.lineTo(150, 460);
ctx.stroke();
// Mouth
ctx.fillStyle = 'eee';
drawEllipse(130, 470, 30, 10);
// Hat
drawEllipse(90, 388, 120, 20);
drawRect(125, 330, 50, 60);
drawEllipse(125, 388, 50, 10);
ctx.strokeStyle = 'eee';
drawRect(128, 388, 44, 5);
ctx.strokeStyle = '000';
drawEllipse(125, 320, 50, 15);
// Bike
ctx.fillStyle = 'eee';
ctx.strokeStyle = '000';
ctx.lineWidth = 3;
// Tires
drawEllipse(40, 550, 100, 100);
drawEllipse(240, 550, 100, 100);
// Frames
ctx.moveTo(90, 600);
ctx.lineTo(150, 530);
ctx.lineTo(275, 530);
ctx.lineTo(175, 600);
ctx.lineTo(90, 600);
// Chain wheel
ctx.moveTo(190, 600);
ctx.arc(178, 600, 10, 0, Math.PI * 2, true);
// Pedals
ctx.moveTo(175, 593);
ctx.lineTo(160, 580);
ctx.moveTo(183, 608);
ctx.lineTo(195, 617);
// Seat
ctx.moveTo(180, 600);
ctx.lineTo(140, 500);
ctx.moveTo(120, 500);
ctx.lineTo(160, 500);
// Steering wheel
ctx.moveTo(290, 600);
ctx.lineTo(270, 490);
ctx.lineTo(230, 500);
ctx.moveTo(270, 490);
ctx.lineTo(300, 460);
ctx.stroke();

function drawLine(from, to) {
    ctx.moveTo(from.left, from.top);
    ctx.lineTo(to.left, to.top);
}

function drawEllipse(x, y, w, h) {
    var kappa = .5522848,
	  ox = (w / 2) * kappa, // control point offset horizontal
	  oy = (h / 2) * kappa, // control point offset vertical
	  xe = x + w,           // x-end
	  ye = y + h,           // y-end
	  xm = x + w / 2,       // x-middle
	  ym = y + h / 2;       // y-middle

    ctx.beginPath();
    ctx.moveTo(x, ym);
    ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
    ctx.stroke();
    ctx.fill();
    ctx.closePath();
}

function drawWindow(left, top, width, height) {
    drawRect(left, top, width, height);
    ctx.moveTo(left, top + height / 2);
    ctx.lineTo(left + width, top + height / 2);
    ctx.moveTo(left + width / 2, top);
    ctx.lineTo(left + width / 2, top + height);
    ctx.stroke();
}

function drawRect(left, top, width, height) {
    ctx.strokeRect(left, top, width, height);
    ctx.fillRect(left + 1, top + 1, width - 2, height - 2);
}