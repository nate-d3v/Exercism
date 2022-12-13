//Acronym
export function parse(phrase: string): any {
	return phrase
		.split(/[\s-_]+/g)
		.map(word => {
			let sliced = word.slice(1);
			if (sliced !== sliced.toUpperCase() && sliced !== sliced.toLowerCase()) {
				for (const letter of sliced) {
					if (letter === letter.toUpperCase()) {
						return word[0].toUpperCase() + letter;
					}
				}
			}
			return word[0].toUpperCase();
		})
		.join('');
}
