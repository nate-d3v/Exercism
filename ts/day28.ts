//Run-Length Encoding
export function encode(input: string): string {
	let arr: string[] = [];
	for (let i = 0, t = 0; i < input.length; i++) {
		if (input[i + 1] !== input[i]) {
			arr.push(input.slice(t, i + 1));
			t = i + 1;
		}
	}
	return arr
		.map((x: string) => (x.length > 1 ? `${x.length}${x[0]}` : x[0]))
		.join('');
}
export function decode(input: string): string {
	let arr: string[] = [];
	for (let i = 0, t = 0; i < input.length; i++) {
		if (!'0123456789'.includes(input[i])) {
			arr.push(input.slice(t, i + 1));
			t = i + 1;
		}
	}
	return arr
		.map((x: string) =>
			x.length > 1
				? x[x.length - 1].repeat(Number(x.slice(0, x.length - 1)))
				: x[0]
		)
		.join('');
}
