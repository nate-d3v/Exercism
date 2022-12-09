//Hamming
export function compute(left: string, right: string): number {
	let total: number = 0;
	if (left.length !== right.length)
		throw new Error('DNA strands must be of equal length.');
	for (let i = 0; i < left.length; i++) {
		if (left[i] !== right[i]) {
			total++;
		}
	}
	return total;
}
