
const fs = require("fs")

// Add a p
const addPerson = (id, fName, lName, age, city) => {
    const allData = loadInfo()
    const duplicatedData = allData.filter((obj) => {
        return obj.id == id;
    })

    if (duplicatedData.length == 0) {

        allData.push({
            id: allData.length + 1,
            fName: fName,
            lName,
            age: age,
            city: city
        })
        saveData(allData)
        console.log("Hello The item have already added" );
    } else {
        console.log("Error DUPLICATED DATA");
    }
}
// delete a p
const deletedData = (id) => {
    const allData = loadInfo()
    const dataToKeep = allData.filter((obj) => {
        return obj.id !== id
    })
    console.log(dataToKeep);

    saveData(dataToKeep)
    console.log("You have Successfuilly deleted an item ");

}
const deleteAllData=()=> saveData([]);
// to read a p
const readDataByID = (id) => {
    const allData = loadInfo();
    const itemNeeded = allData.find((obj) => {
        return obj.id === id
    })
    if (itemNeeded) {
        console.log(itemNeeded);
    } else {
        console.log("The item is not found ");
    }

}
const displayAllData = () => {
    const allData = loadInfo()
    var count = 1;
    allData.forEach(obj => {
        console.log(`The  id :${obj.id} The name :${obj.fName + " " + obj.lName}  The age : ${obj.age}`);
    });
}



// to load all p
const loadInfo = () => {
    try {

        const dataJson = fs.readFileSync("data15.json").toString()
        return JSON.parse(dataJson)

    } catch {
        return [];
    }
}
// to save all p
const saveData = (allData) => {
    let allDataJson = JSON.stringify(allData)
    fs.writeFileSync("data15.json", allDataJson)
}


module.exports = {
    addPerson,
    deletedData,
    readDataByID,
    displayAllData,
    deleteAllData
}