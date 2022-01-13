const groupObjectsBy=(arr,property)=>{
    let ans={};
    arr.map((element)=>{
      let value=element[property];
        if(!ans[value])
        {
            ans[value]=[];
        }
        ans[value].push(element);
    });
    return ans;
}

groupObjectsBy([ 
    {
      "channel": "A",
      "name": "shoe"
    },
    {
      "channel": "A",
      "name": "electronics"
    },
    {
      "channel": "B",
      "name": "apparel"
    },
    {
      "channel": "C",
      "name": "electronics"
    }
],'channel');