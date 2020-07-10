// Sarah Ayu Nanda

let firstPerson = {
    name: "Rifki",
    weight: 70,
    height: 1.75
}

let secondPerson = {
    name: "Robby",
    weight: 72,
    height: 1.79
}

console.log("            BODY MASS INDEX            ")
console.log("---------------------------------------")
getBMI(firstPerson, secondPerson)

function getBMI(firstPerson, secondPerson) {
    firstBMI = firstPerson.weight / Math.pow(firstPerson.height, 2)
    secondBMI = secondPerson.weight / Math.pow(secondPerson.height, 2)
    console.log(`${firstPerson.name}\t: ${firstBMI}`)
    console.log(`${secondPerson.name}\t: ${secondBMI}`)
    result = check(firstBMI, secondBMI)
    if (firstBMI == secondBMI) {
        console.log("---------------------------------------")
        console.log(`${firstPerson.name}'s BMI as same as ${secondPerson.name}'s BMI`)
    } else {
        getInfo(result)
    }
}

function check(firstBMI, secondBMI) {
    let isHigher = (firstBMI > secondBMI)
    return isHigher
}

function getInfo(result) {
    console.log("---------------------------------------")
    if (result == true) {
        console.log(`${firstPerson.name}'s BMI is higher than ${secondPerson.name}'s BMI`)
    } else {
        console.log(`${secondPerson.name}'s BMI is higher than ${firstPerson.name}'s BMI`)
    }
}
