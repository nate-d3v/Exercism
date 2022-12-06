//Protein Translation
const proteins = [
	'Methionine',
	'Phenylalanine',
	'Leucine',
	'Serine',
	'Tyrosine',
	'Cysteine',
	'Tryptophan',
] as const;
export type Protein = typeof proteins[];
export function translate(rna: string): Protein {
	let codon: Record<string, number> = {
		AUG: 0,
		UUU: 1,
		UUC: 1,
		UUA: 2,
		UUG: 2,
		UCU: 3,
		UCC: 3,
		UCA: 3,
		UCG: 3,
		UAU: 4,
		UAC: 4,
		UGU: 5,
		UGC: 5,
		UGG: 6,
	};
	let codonsArr: any = rna.match(/.{3}/g);
	let stopArr: string[] = ['UAA', 'UAG', 'UGA'];
	if (stopArr.some(x => codonsArr.includes(x))) {
		let index: string[] = stopArr.filter(x => codonsArr.indexOf(x) !== -1);
		codonsArr = codonsArr.slice(0, codonsArr.indexOf(index[0]));
	}
	return codonsArr.map((x: string) => proteins[codon[x]]);
}
