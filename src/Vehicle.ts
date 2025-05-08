export class Vehicle {
  public speed: number = 0;

  constructor(
    public model: string,
    public color: string
  ) {}

  increaseSpeed(amount: number): void {
    this.speed += amount;
  }

  decreaseSpeed(amount: number): void {
    this.speed = Math.max(0, this.speed - amount);
  }

  getInfo(): string {
    return `Model: ${this.model}, Color: ${this.color}, Speed: ${this.speed} mph`;
  }
}
