class Line {
	constructor(pt1, pt2) {
		this.pt1 = pt1
		this.pt2 = pt2
	}

	draw(ctx) {
		ctx.moveTo(this.pt1.x, this.pt1.y)
		ctx.lineTo(this.pt2.x, this.pt2.y)
		ctx.strokeStyle = '#00ffff'
		ctx.stroke()
		this.pt1.draw(ctx)
		this.pt2.draw(ctx)
	}
}