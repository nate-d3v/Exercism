//Difference of Squares
export class Squares {
	count: number;

	constructor(count: number) {
		this.count = count;
	}
	get sumOfSquares(): number {
		return (this.count * (this.count + 1) * (2 * this.count + 1)) / 6;
	}
	get squareOfSum(): number {
		let arr: number[] = [];
		for (let i = 1; i <= this.count; i++) {
			arr.push(i);
		}
		return Math.pow(
			arr.reduce((t, x) => t + x, 0),
			2
		);
	}
	get difference(): number {
		return this.squareOfSum - this.sumOfSquares;
	}
}
