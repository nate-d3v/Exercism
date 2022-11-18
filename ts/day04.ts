//Resistor Color Trio
const colors = [
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
] as const;
export type Color = typeof colors[number];
export function decodedResistorValue([
	color1,
	color2,
	color3,
]: Color[]): string {
	let result: string = `${colors.indexOf(color1)}${colors.indexOf(
		color2
	)}${'0'.repeat(colors.indexOf(color3))}`;
	return Number(result) >= 1000
		? `${Number(result) / 1000} kiloohms`
		: `${Number(result)} ohms`;
}
