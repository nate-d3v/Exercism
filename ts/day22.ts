//Anagram
export class Anagram {
	private word: string;

	constructor(input: string) {
		this.word = input.toLowerCase();
	}
	public matches(...potentials: string[]): string[] {
		let arr = this.createArr(this.word);
		return potentials.filter(
			x => this.createArr(x) === arr && x.toLowerCase() !== this.word
		);
	}
	private createArr(input: string): string {
		return input.toLowerCase().split('').sort().join('');
	}
}
