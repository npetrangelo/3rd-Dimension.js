var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

function myFunction() {
	ctx.beginPath();
	ctx.rect(0, 0, c.width, c.height);
	ctx.fillStyle = "black";
	ctx.fill();
	let line = new Line(new Point(100, 100), new Point(200, 200));
	line.draw(ctx;)
}