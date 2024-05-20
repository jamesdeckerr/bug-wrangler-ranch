const { database } = require("./database.js")

const cattleToDrive = 50
const hireDrovers = (cattleToDrive) => {
    const droversOut = []
    const allDrovers = database.drovers
    const numberNeeded = cattleToDrive / 10

    for (let counter = 0; counter < numberNeeded; counter++) {
        const randomHerderId = Math.floor(Math.random() * allDrovers.length)
        droversOut.push(allDrovers[randomHerderId])
    }
return droversOut
}

module.exports = { hireDrovers }