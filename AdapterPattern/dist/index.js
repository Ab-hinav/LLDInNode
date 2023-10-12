"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Adapter_1 = require("./Adapter");
const Adaptee_1 = require("./Adaptee");
const adapter = new Adapter_1.WeightMachineAdapterImpl(new Adaptee_1.WeightMachineForBabies());
console.log(adapter.getWeightInKgs());
