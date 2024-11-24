
let hashMap =new Map();
hashMap.set('key1','value1');
hashMap.set('key2','value2');
hashMap.set('key3','value3');

for (let [key,value] of hashMap){
    console.log(`key: ${key},Value: ${value}`);
}

//get specific value by key
console.log('Value of key 2:',hashMap.get('key2'));

// key exists
console.log('HashMap has key3:',hashMap.has('key3'));

