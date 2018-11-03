class Line3D {
	constructor(p1, p2) {
		this.p1 = p1;
		this.p2 = p2;
	}

	draw(ctx, cam) {
		pt1 = cam.project(this.p1);
		pt2 = cam.project(this.p2);
		this.p1.draw(ctx, cam);
		this.p2.draw(ctx, cam);
		line = new Line(pt1, pt2);
		line.draw(ctx);
	}

	midPoint() {
		x = (this.p1.x + this.p2.x) / 2;
		y = (this.p1.y + this.p2.y) / 2;
		z = (this.p1.z + this.p2.z) / 2;
		return new Point3D(x, y, z)
	}

	makeIntersection(zPlane) {
		zPercent = (zPlane - this.p1.z) / (this.p2.z - this.p1.z);
		x = zPercent * (this.p2.x - this.p1.x) + this.p1.x;
		y = zPercent * (this.p2.y - this.p1.y) + this.p1.y;

		if ((zPlane > this.p1.z && zPlane < this.p2.z) ||
			(zPlane < this.p1.z && zPlane > this.p2.z)) {
			return new Point3D(x, y, zPlane);
		} else {
			return null;
		}
	}
}