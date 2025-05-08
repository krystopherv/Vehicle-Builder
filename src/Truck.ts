import { Vehicle } from './Vehicle';

export class Truck extends Vehicle {
  constructor(
    model: string,
    color: string,
    public payloadCapacity: number
  ) {
    super(model, color);
  }

  getInfo(): string {
    return `${super.getInfo()}, Payload Capacity: ${this.payloadCapacity} tons`;
  }
}
