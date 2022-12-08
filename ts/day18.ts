//Raindrops
export function convert(input: number): string {
	let answer: string = '';
	if (input % 3 === 0) {
		answer += 'Pling';
	}
	if (input % 5 === 0) {
		answer += 'Plang';
	}
	if (input % 7 === 0) {
		answer += 'Plong';
	}
	return answer === '' ? input.toString() : answer;
}
