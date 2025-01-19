const EventEmmiter= require('events');

//create an instance
const eventEmiter= new EventEmmiter();

//creating Listners
eventEmiter.on('error',(err)=>{
    console.error("An Error Occured",err);
})

eventEmiter.emit('error' ,new Error('Something Went Wrong!'));