export class Tracking {
  constructor(
    public name: string,
    public number: string,
  ) { }

  get trackingNumber() {
    const numbersOnly = this.number?.match(/\d+/g);
    return numbersOnly?.join("");
  }
}