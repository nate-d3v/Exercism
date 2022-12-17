//Series
export class Series {
	private number: string;

	constructor(series: string) {
		this.number = series;
	}
	slices(sliceLength: number): number[][] {
		let arr: number[][] = [];

		if (this.number.length === 0) {
			throw new Error('series cannot be empty');
		} else if (sliceLength < 0) {
			throw new Error('slice length cannot be negative');
		} else if (sliceLength === 0) {
			throw new Error('slice length cannot be zero');
		} else if (sliceLength > this.number.length) {
			throw new Error('slice length cannot be greater than series length');
		}
		for (let i = 0; i <= this.number.length - sliceLength; i++) {
			arr.push(
				this.number
					.slice(i, i + sliceLength)
					.split('')
					.map(x => +x)
			);
		}
		return arr;
	}
}
