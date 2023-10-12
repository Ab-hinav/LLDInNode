"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightMachineAdapterImpl = void 0;
class WeightMachineAdapterImpl {
    constructor(weightMachine) {
        this.weightMachine = weightMachine;
    }
    getWeightInKgs() {
        const weightInPounds = this.weightMachine.getWeightInPounds();
        return weightInPounds * 0.453592;
    }
}
exports.WeightMachineAdapterImpl = WeightMachineAdapterImpl;
