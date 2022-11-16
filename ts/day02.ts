//Resistor Color Duo
export function decodedValue(input: string[]): number {
	let colors: string[] = [
		'black',
		'brown',
		'red',
		'orange',
		'yellow',
		'green',
		'blue',
		'violet',
		'grey',
		'white',
	];
	return Number(`${colors.indexOf(input[0])}${colors.indexOf(input[1])}`);
}
