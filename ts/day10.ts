//Bob
const answers = [
	'Sure.',
	'Whoa, chill out!',
	"Calm down, I know what I'm doing!",
	'Fine. Be that way!',
	'Whatever.',
] as const;
export type Answers = typeof answers[number];
export function hey(message: string): Answers {
	if (
		/[A-Z]/.test(message) &&
		message === message.toUpperCase() &&
		message.endsWith('?')
	) {
		return answers[2];
	} else if (message.trimEnd().endsWith('?')) {
		return answers[0];
	} else if (/[A-Z]/.test(message) && message === message.toUpperCase()) {
		return answers[1];
	} else if (message.length === 0 || /^\s*$/.test(message)) {
		return answers[3];
	} else {
		return answers[4];
	}
}
