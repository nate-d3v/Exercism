//ETL
type OldType = Record<number, string[]>;
type NewType = Record<string, number>;

export function transform(oldObj: OldType): NewType {
	let newObj: Record<string, number> = {};
	for (const num in oldObj) {
		oldObj[num].forEach(x => (newObj[x.toLowerCase()] = +num));
	}
	return newObj;
}
