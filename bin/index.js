#! /usr/bin/env node

const column1 = [
  "integrated",
  "total",
  "systematized",
  "parallel",
  "functional",
  "responsive",
  "optimal",
  "synchronized",
  "compatible",
  "balanced",
];
const column2 = [
  "Management",
  "organizational",
  "monitored",
  "reciprocal",
  "digital",
  "logistical",
  "transitional",
  "incremental",
  "third-generation",
  "policy",
];
const column3 = [
  "Options",
  "Flexibility",
  "capability",
  "mobility",
  "programming",
  "concept",
  "time-phase",
  "projection",
  "hardware",
  "contingency",
];

let rndStr = (Math.floor(Math.random() * 999) + "").padStart(3, "0");

console.log(
  column1[rndStr[0]] + " " + column2[rndStr[1]] + " " + column3[rndStr[2]]
);
