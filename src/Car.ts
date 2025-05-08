import { Vehicle } from './Vehicle';

export class Car extends Vehicle {
  constructor(
    model: string,
    color: string,
    public numberOfDoors: number
  ) {
    super(model, color);
  }

  getInfo(): string {
    return `${super.getInfo()}, Doors: ${this.numberOfDoors}`;
  }
}
