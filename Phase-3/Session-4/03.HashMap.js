

const hashMap=new Map();


hashMap.set('name','Nikunj');
hashMap.set('age',15);
hashMap.set('job','Corporate Trainer');


//access the value
console.log(hashMap.get('name'));

//check if a key exist
console.log(hashMap.has('age'));


//delete a key-value pair

hashMap.delete('job');
console.log(hashMap.has('job'));


console.log(hashMap.size);