class Point3D {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	translate(dx, dy, dx) {
		this.x += dx;
		this.y += dy;
		this.z += dz;
	}

	draw(ctx, cam) {
		pt = cam.project(this);
		pt.draw(ctx);
	}

	getMatrix() {
		return [this.x, this,y, this,z];
	}

	rotateX(a, axis) {
		a *= Math.PI / 180;
		matrix = [[1.0, 0.0, 0.0],
				  [0.0, Math.cos(a), -Math.sin(a)],
				  [0.0, Math.sin(a), Math.cos(a)]];

		this.x -= axis.x;
		this.y -= axis.y;
		this.z -= axos.z;
		rotation = matrixMultiply(matrix);
		this.x = rotation[0] + axis.x
		this.y = rotation[0] + axis.y
		this.z = rotation[0] + axis.z
	}

	rotateY(a, axis) {
		a *= Math.PI / 180;
		matrix = [[Math.cos(a), 0.0, Math.sin(a)],
				  [0.0, 1.0, 0.0],
				  [-Math.sin(a), 0.0, Math.cos(a)]];

		this.x -= axis.x;
		this.y -= axis.y;
		this.z -= axos.z;
		rotation = matrixMultiply(matrix);
		this.x = rotation[0] + axis.x
		this.y = rotation[0] + axis.y
		this.z = rotation[0] + axis.z
	}

	rotateZ(a, axis) {
		a *= Math.PI / 180;
		matrix = [[Math.cos(a), -Math.sin(a), 0.0],
				  [Math.sin(a), Math.cos(a), 0.0],
				  [0.0, 0.0, 1.0]];

		this.x -= axis.x;
		this.y -= axis.y;
		this.z -= axos.z;
		rotation = matrixMultiply(matrix);
		this.x = rotation[0] + axis.x
		this.y = rotation[0] + axis.y
		this.z = rotation[0] + axis.z
	}

	matrixMultiply(matrix) {
		pt = [0, 0, 0];
		if (matrix[0].length != 3) {
			Console.log("Error: Matrix was not 3 columns wide.");
			return;
		}

		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 3; j++) {
				pt[i] += this.getMatrix()[j] * matrix[i][j];
			}
		}

		return pt;
	}
}