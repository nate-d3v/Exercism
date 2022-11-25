//Pangram
export function isPangram(sentence: string): boolean {
	let array: string[] = sentence.toLowerCase().split('');
	let alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
	return alphabet.every(x => array.includes(x));
}
