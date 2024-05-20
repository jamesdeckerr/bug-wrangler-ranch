const { database } = require("./database.js")

const roundup = (herdSize) => {
    const cattle = []
    const types = database.cattleTypes

    for (let counter = 0; counter < herdSize; counter++) {
        const randomType = Math.floor(Math.random() * types.length)
        const animal = types[randomType]
        cattle.push(animal)
    }

let breeds = '';
let i = 0;

while (i < cattle.length) {
    breeds += cattle[i].breed;
    if (i < cattle.length - 1) {
        breeds += ', ';
    }
    i++;
}

    return { breeds, cattle}
}


module.exports = { roundup }