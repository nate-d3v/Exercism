//RNA Transcription
export function toRna(complement: string): string {
	let obj: Record<string, string> = {
		G: 'C',
		C: 'G',
		T: 'A',
		A: 'U',
	};
	if (complement.split('').every((x: string) => 'GCTA'.includes(x))) {
		return complement
			.split('')
			.map((x: string) => obj[x])
			.join('');
	}
	throw new Error('Invalid input DNA.');
}
