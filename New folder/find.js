const scores = [0,0,0,0,0,0,24,26,33,48,66,75,88,93];

function myFind(arr, callback){
    for (let i=0; i<arr.length; i++) {
      if (callback(arr[i], i, arr) ===true) return arr[i];
    }
}
myFind(scores, function(score){
    return score > 91
});