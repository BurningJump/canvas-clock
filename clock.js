var clock = document.getElementById('clock');
var ctx=clock.getContext("2d");
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var r = width/2;

function drawBackground() {
	ctx.beginPath();
	ctx.translate(r, r);
	ctx.lineWidth = 10;
	ctx.arc(0, 0, r-5, 0, 2*Math.PI, false);
	ctx.stroke();

	var hourNumbers = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
}
drawBackground();