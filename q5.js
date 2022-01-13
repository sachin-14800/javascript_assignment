class SortArray{
    #originalArray=[];
    getArray()
    {
        return this.#originalArray;
    }
    #sort()
    {
        let arr=this.#originalArray.map((element)=> element);
        return arr.sort((a,b)=>a-b);
    }
    getSortedArray()
    {
        return this.#sort();
    }
    construct(arr)
    {
        //getting an array to construct a new array
        this.#originalArray=arr;
    }
};

class SortObjectArray extends SortArray{
    #sort(property)
    {
        let array=this.getArray();
        return array.sort((a,b)=>{
            a=Object.keys(a);
            b=Object.keys(b);
            if(a>b)
            return 1;
            else if(a<b)
            return -1;
            return 0;
        });
    }
    getSortedArray()
    {
        return this.#sort();
    }
};

let obj=new SortObjectArray();

obj.construct([{"abc":2},{"xyz":3},{"def":4},{"abc":2}]);
obj.getSortedArray();