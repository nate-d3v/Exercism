//Armstrong Numbers
export function isArmstrongNumber(number: number): boolean {
	let num = number.toString();
	let result = 0;
	for (let i = 0; i < num.length; i++) {
		result += Math.pow(+num[i], num.length);
	}
	return number === result;
}
