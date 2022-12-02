//Word Count
export function count(sentence: string): Map<string, number> {
	let arr: string[] = sentence.trim().toLowerCase().split(/\s+/);
	let map = new Map<string, number>();
	arr.forEach(x => map.set(x, arr.filter(y => y === x).length));
	return map;
}
