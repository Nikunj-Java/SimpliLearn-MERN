const mongoose= require('mongoose');
const dburl='mongodb://localhost:27017/simplilearn_2025';

mongoose.connect(dburl).then(()=>console.log('Connected')).catch((err)=>{console.log(err)});
