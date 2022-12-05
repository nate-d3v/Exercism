//Triangle
export class Triangle {
	sides: number[];

	constructor(...sides: number[]) {
		this.sides = sides;
	}
	private isTriangle() {
		return (
			this.sides.every(
				(x, i) =>
					[...this.sides.slice(0, i), ...this.sides.slice(i + 1)].reduce(
						(t, y) => t + y,
						0
					) >= this.sides[i]
			) && this.sides.every(x => x > 0)
		);
	}
	get isEquilateral() {
		return this.isTriangle() && this.sides.every(x => x === this.sides[0]);
	}
	get isIsosceles() {
		return (
			this.isTriangle() &&
			this.sides.some(x => this.sides.filter(y => x === y).length >= 2)
		);
	}
	get isScalene() {
		return (
			this.isTriangle() &&
			this.sides.every(x => this.sides.filter(y => x === y).length === 1)
		);
	}
}
