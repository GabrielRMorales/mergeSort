function mergeSort(arr){
  if (arr.length==1){
  return [arr[0]];
  }
  
  return mer(sl(arr.slice(0, arr.length/2)),sr(arr.slice(arr.length/2, arr.length)));
  
  function sl(arr){
    return mergeSort(arr);
  }

  function sr(arr){
    return mergeSort(arr);
  }

  function mer(first, second){
    var new_arr=[];
    console.log("first is "+first+" second is "+second);
      while (first[0]!=undefined || second[0]!=undefined){
        console.log("Inside loop: first is "+first+" second is "+second);
        if (first[0]<second[0] || second[0]==undefined){
          console.log("first[0] is "+first[0]);
          console.log("second[0] is "+second[0]);
          console.log(first[0]<second[0]);
          let x=first.splice(0,1);
          new_arr.push(x);
          console.log("x new_arr is "+new_arr);
          }
        else {
          let y=second.splice(0,1);
          new_arr.push(y);
          console.log("y new_arr is "+new_arr);
        }
      }
    var merged = [].concat.apply([], new_arr);  
    return merged;

  }
 
}

mergeSort([108,15,50,4,8,42,23,16,9,55]);