const obj={
    "name":"Nikunj Soni",
    "gender":"M",
    "email":"nikunj@gmail.com",
    "login":false,
    "acive":true,
    "hobbies":["playing","Singing","Coding"],
    "address":{
        "city":"Mumbai",
        "state":"Maharashtra"
    }
};

console.log(">>>>> Getting the Value: ",obj['name']);
console.log(">>>>> Object: ",obj);

//adding new Value in object

obj['phone']='9876543210';
obj['address']['country']="India";

console.log(">>>>>Object After Updation")
console.log(">>>>> Updated Object: ",obj);