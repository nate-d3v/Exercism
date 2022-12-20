//Diffie-Hellman
export class DiffieHellman {
	pVar: number;
	gVar: number;

	constructor(p: number, g: number) {
		if (p <= 1 || g <= 1) {
			throw new Error();
		}
		if (!this.isPrime(p) || !this.isPrime(g)) {
			throw new Error();
		}
		this.pVar = p;
		this.gVar = g;
	}
	public getPublicKey(privateKey: number): number {
		if (privateKey <= 1 || privateKey >= this.pVar) {
			throw new Error();
		}
		return Math.pow(this.gVar, privateKey) % this.pVar;
	}
	public getSecret(theirPublicKey: number, myPrivateKey: number): number {
		return Math.pow(theirPublicKey, myPrivateKey) % this.pVar;
	}
	private isPrime(num: number): boolean {
		for (let i = 2; i < num; i++) {
			if (num % i === 0) {
				return false;
			}
		}
		return true;
	}
}
