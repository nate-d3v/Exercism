//Perfect Numbers
type Category = 'perfect' | 'abundant' | 'deficient';
export function classify(input: number): Category {
	if (input < 1)
		throw new Error('Classification is only possible for natural numbers.');
	let arr: number[] = [];
	for (let i = 1; i < input; i++) {
		if (input % i === 0) {
			arr.push(i);
		}
	}
	let answer = arr.reduce((t, x) => t + x, 0);
	return answer === input
		? 'perfect'
		: answer > input
		? 'abundant'
		: 'deficient';
}
