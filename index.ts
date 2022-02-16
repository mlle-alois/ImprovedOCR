import {NumberStrings} from "./src/number-strings";

for (let i = 0; i < 12; i += 3) {
    console.log(NumberStrings.NUMBER_ONE.substring(i, i + 3) +
        NumberStrings.NUMBER_TWO.substring(i, i + 3) +
        NumberStrings.NUMBER_THREE.substring(i, i + 3) +
        NumberStrings.NUMBER_FOUR.substring(i, i + 3) +
        NumberStrings.NUMBER_FIVE.substring(i, i + 3) +
        NumberStrings.NUMBER_SIX.substring(i, i + 3) +
        NumberStrings.NUMBER_SEVEN.substring(i, i + 3) +
        NumberStrings.NUMBER_EIGHT.substring(i, i + 3) +
        NumberStrings.NUMBER_NINE.substring(i, i + 3))
}

console.log('Execution')
