//   cammel case letter in EventEmitter(its like class)
const EventEmitter = require("events");

// same as class when we create new 
const event = new EventEmitter();

// event.on("sayhello", ()=>{
//     console.log("How are You");
// });

// event.on("sayhello", ()=>{
//     console.log("Fine");
// });

// event.on("sayhello", ()=>{
//     console.log("You tell");
// });

// event.emit("sayhello");

// event.on always write above to event.emit()
event.on("checkingPage", (sc, msg)=>{
    console.log(`status cose is ${sc} and the page is ${msg}`);
})

// Pasing parameters and excess in event.on(parameters)      
event.emit("checkingPage", 200, "OK");