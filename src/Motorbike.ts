import { Vehicle } from './Vehicle';

export class Motorbike extends Vehicle {
  constructor(
    model: string,
    color: string,
    public hasSidecar: boolean
  ) {
    super(model, color);
  }

  getInfo(): string {
    return `${super.getInfo()}, Sidecar: ${this.hasSidecar ? 'Yes' : 'No'}`;
  }
}
