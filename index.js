/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation
 *  that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to 
 * the command line.
 */
 function calculator() {
    console.log(process.argv)
    if (process.argv.length <=2) {
        return "No operation provided..."
    }
    if (!(process.argv.includes("plus") || process.argv.includes("minus"))) {
        return `Invalid operation: ${process.argv[2]}`
    } 
    if (process.argv.length >= 4) {
    let sum = Number(process.argv[3]) // equal first number
    for (let i = 4; i < process.argv.length; i++){
       if(process.argv.includes("plus")){
        sum += Number(process.argv[i])
       }
       if (process.argv.includes("minus")){
        sum -= process.argv[i]
       }
    }
    return sum
    } else {
        return "No numbers provided..."
    }
}

// Don't change anything below this line.
module.exports = calculator;
