import { WeightMachineAdapterImpl } from "./Adapter";
import { WeightMachineForBabies } from "./Adaptee";



const adapter = new WeightMachineAdapterImpl(new WeightMachineForBabies());

console.log(adapter.getWeightInKgs());