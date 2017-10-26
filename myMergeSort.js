function mergeSort(arr){
  if (arr.length==1){
  return [arr[0]];
  }
  
  return merge(sl(arr.slice(0, arr.length/2)),sr(arr.slice(arr.length/2, arr.length)));
  
  function sl(arr){
    return mergeSort(arr);
  }

  function sr(arr){
    return mergeSort(arr);
  }

  function merge(first, second){
    var new_arr=[];
      while (first.length>0 || second.length>0){
        if (first[0]<second[0] || second.length==0){
          let x=first.splice(0,1);
          new_arr.push(x);
          }
        else {
          let y=second.splice(0,1);
          new_arr.push(y);
        }
      }
    return merged = [].concat.apply([], new_arr);  
  }
  
}

mergeSort([108,15,50,4,8,42,23,16,9,55]);