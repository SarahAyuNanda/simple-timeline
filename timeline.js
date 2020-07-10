// Sarah Ayu Nanda

console.log("--------------------------------------------")
console.log("Time\t|\tActivity")
console.log("--------------------------------------------")
getTime(4)
getTime(8)
getTime(12)
getTime(20)
getTime(25)
console.log("--------------------------------------------")


function getTime(time) {
    if (time > 24) {
        console.log(`${time}:00\t|\tIt's only 24 hours in a day`)
    } else if (time >= 0 && time <= 24) {
        if (time > 11 && time < 13) {
            console.log(`${time}:00\t|\tBreak time`)
        } else if ((time >= 8 && time <= 11) || (time >= 13 && time <= 17)) {
            console.log(`${time}:00\t|\tStudy time`)
        } else if (time >= 4 && time <= 5) {
            console.log(`${time}:00\t|\tWake up time`)
        } else {
            console.log(`${time}:00\t|\tPlaying time`)
        }
    } else {
        console.log("Invalid time")
    }
}