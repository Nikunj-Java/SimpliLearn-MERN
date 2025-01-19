const EventEmmiter= require('events');

//create an instance
const eventEmiter= new EventEmmiter();

//creating Listners
//on --register a listner for the greeting
eventEmiter.on('greeting',(name)=>{
    console.log(`Hello, ${name}`);
})
//emit triggers the greeting event passing the argument 'Nikunj Soni'
eventEmiter.emit('greeting','Nikunj Soni');