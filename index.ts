import {NumberStrings} from "./number-strings";

for (let i = 0; i < 12; i += 3) {
    console.log(NumberStrings.number_one.substring(i, i + 3) +
        NumberStrings.number_two.substring(i, i + 3) +
        NumberStrings.number_three.substring(i, i + 3) +
        NumberStrings.number_four.substring(i, i + 3) +
        NumberStrings.number_five.substring(i, i + 3) +
        NumberStrings.number_six.substring(i, i + 3) +
        NumberStrings.number_seven.substring(i, i + 3) +
        NumberStrings.number_eight.substring(i, i + 3) +
        NumberStrings.number_nine.substring(i, i + 3))
}

console.log('Execution')
