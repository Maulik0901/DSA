var xorQueries = function(arr, queries) {
    let xorarry = []

    let xordata = 0;
    for(let i=0;i<arr.length;i++) {
        xordata = xordata ^ arr[i];
        xorarry.push(xordata)
    }
   
    let ans = [];
    for(let i=0;i<queries.length;i++) {
        let start = queries[i][0];
        let end = queries[i][1];

        if(start === 0) {
            ans.push(xorarry[end])            
        } else {
            ans.push(xorarry[start-1] ^ xorarry[end]);
        }       
    }
    
    return ans;
};

console.log(xorQueries([1,3,4,8],[[0,1],[1,2],[0,3],[3,3]]))