
const data100 = require("./data100")
const yargs = require("yargs")

yargs.command({
    command: "add",
    describe: "the add the data",
    builder: {
        fName: {
            describe: "The First name ",
            demandOption: true,
            type: "string"
        },
        lName: {
            describe: "The last Name",
            demandOption: true,
            type: "string"
        }
    }
    ,
    handler: (x) => {
        data100.addPerson(x.id, x.fName, x.lName, x.age, x.city)
        
    }
})

yargs.command({
    command: "delete",
    describe: "to delete by id",
    builder:{
        id:{
            describe:"The id of Data",
            demandOption:true,
            type:"number"
        }
    },
    handler: (x) => {
        data100.deletedData(x.id)
    }
})

yargs.command({
    command: "read",
    describe: "To read item Needed by id",
    builder:{
        id:{
            describe:"The id of Data",
            demandOption:true,
            type:"number"
        }
    },
    handler: (x) => {
        data100.readDataByID(x.id)
    }
})

yargs.command({
    command: "list",
    describe: "to list data",
    handler: () => {
        data100.displayAllData();
        console.log("The All Data");

    }
})

yargs.command({
    command: "deleteAll",
    describe: "to delete all Data",
    handler: () => {
        data100.deleteAllData()
        console.log("clear data ");

    }
})


yargs.parse()



