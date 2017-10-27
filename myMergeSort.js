function mergeSort(arr){
  if (arr.length==1){
  return [arr[0]];
  }
  
  return merge(sortLeft(arr.slice(0, arr.length/2)),sortRight(arr.slice(arr.length/2, arr.length)));
  
  function sortLeft(arr){
    return mergeSort(arr);
  }

  function sortRight(arr){
    return mergeSort(arr);
  }

  function merge(first, second){
    var new_arr=[];
      while (first.length>0 || second.length>0){
        if (first[0]<second[0] || second.length==0){
          new_arr.push(first.splice(0,1));
          }
        else {
          new_arr.push(second.splice(0,1));
        }
      }
    return merged = [].concat.apply([], new_arr);  
  }
  
}

mergeSort([108,15,50,4,8,42,23,16,9,55]);
