import { WeightMachine } from "./WeightMachineInterface";

export class WeightMachineForBabies implements WeightMachine {
  
    getWeightInPounds(): number {
    return 10;
  }
  
}