class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	draw(ctx) {
		ctx.beginPath();
  		ctx.arc(this.x, this.y, 4, 0, 2 * Math.PI, true);
  		ctx.fillStyle = '#00ffff';
  		ctx.fill();
	}
}