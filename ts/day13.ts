//Gigasecond
export class Gigasecond {
	inputDate: Date;
	constructor(input: Date) {
		this.inputDate = input;
	}

	public date(): Date {
		return new Date(this.inputDate.getTime() + 1000000000000);
	}
}
