class Camera {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.z = -150;
		this.phi = 0;

		this.focalLength = 450;
		this.orthoZoom = 3;
		this.factor = 1.0;
	}

	rotate(dPhi) {
		this.phi += dPhi;
	}

	setRotation(phi) {
		this.phi = phi;
	}

	translate(dx, dy, dx) {
		this.x += dx;
		this.y += dy;
		this.z += dz;
	}

	setPosition(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	mix(val1, val2, factor) {
		return (val1 * factor) + (val2 * (1 - factor));
	}

	transform(pt) {
		image = new Point3D(pt.x, pt.y, pt.z);
		axis = new Point3D(0.0, 0.0, 0.0);
		image.rotateX(phi, axis);
		image.translate(-this.x, -this.y, -this.z);
	}

	project(pt) {
		image = transform(pt);
		projectionConstant = mix(focalLength / image.z, orthoZoom, factor);
		return new Point(image.x * projectionConstant, image.y * projectionConstant);
	}
}