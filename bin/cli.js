import roll from "../lib/roll.js"

import minimist from 'minimist'

const args = minimist(process.argv.slice(2))

let sides = args.sides && args.sides > 0 ? args.sides: 6;
let dice = args.dice && args.sides ? args.dice: 2;
let rolls = args.rolls && args.sides ? args.rolls: 1;

console.log(JSON.stringify(roll(sides, dice, rolls)));