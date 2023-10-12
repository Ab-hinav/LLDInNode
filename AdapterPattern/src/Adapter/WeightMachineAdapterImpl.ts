import { WeightMachineAdapter } from "./WeightMachineAdapter";
import { WeightMachine } from "../Adaptee";


export class WeightMachineAdapterImpl implements WeightMachineAdapter{
    weightMachine: WeightMachine;

    constructor(weightMachine:WeightMachine){
        this.weightMachine = weightMachine;
    }

    getWeightInKgs(): number {
        const weightInPounds = this.weightMachine.getWeightInPounds();
        return weightInPounds * 0.453592;
    }


}