class CustomHasMap{

    constructor(size=53){
        this.buckets= new Array(size); //array will hold buckets
        this.size=size; //number of buckets
        this.count=0;   // no.of elements
    }

        //hash function to complete an index for a given key
        _has(key){
            let total=0;
            const PRIME=31;
            const keyStr=key.toString();

            for(let i=0;i<Math.min(keyStr.length,100);i++){
                const char =keyStr[i];
                const value=char.charCodeAt(0);
                total=(total * PRIME +value) % this.size;
            }
            return total;
        }

        set(key,value){
            const index=this._has(key);

            //intiate bucket
            if(!this.buckets[index]){
                this.buckets[index]=[];
            }

            //check if the key is already exist and update its value

            for(let pair of this.buckets[index]){
                if(pair[0]==key){
                    pair[1]=value //upadted value for a existing key
                    return;
                }   
            }
            this.buckets[index].push([key,value]);
        }       

}

//driver method

const hasMap=new CustomHasMap();

//add key value pair

hasMap.set("name","Nikunj Soni");
hasMap.set("age",15);
hasMap.set("job","Corporate Trainer");

console.log(hasMap.buckets);