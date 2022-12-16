//Isogram
export function isIsogram(input: string): boolean {
	let str = input
		.split(/[\s-]+/g)
		.map(x => x.toLowerCase())
		.join('');
	let obj: Record<string, number> = {};
	for (const letter of str) {
		obj[letter] = obj[letter] + 1 || 1;
		if (obj[letter] > 1) {
			return false;
		}
	}
	return true;
}
