
const hasMap=new Map();

const objKey1={id: 1};
const objKey2={id: 2};


hasMap.set(objKey1,'objKey 1');
hasMap.set(objKey2,'objKey 2');

console.log(hasMap.get(objKey1));

console.log(hasMap.get(objKey2));