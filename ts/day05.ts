//Resistor Color
export const colorCode = (color: colors): number => {
	return COLORS.indexOf(color);
};
export type colors = typeof COLORS[number];
export const COLORS: string[] = [
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
