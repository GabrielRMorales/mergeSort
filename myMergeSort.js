function mergeSort(arr){
  var newArr=[];
  function mergeLeft(arr){
    var leftArr=arr;
    for (var i=0;i<arr.length/2;i++){
    
      if (arr[i]>arr[i+1]){
        var temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
      }
      
      //console.log("left "+ arr[i]);
  }
  return leftArr;
}  
function mergeRight(arr){
  var rightArr=arr;
    for (var i=arr.length-1;i>=arr.length/2;i--){
    
      if (arr[i]<arr[i-1]){
        var temp=arr[i];
        arr[i]=arr[i-1];
        arr[i-1]=temp;
      }
     
      //console.log("right "+ arr[i]);
  }
   return rightArr;
}
 if (arr.length<2){
    return arr;
  }
  else{
    //merge left half
    mergeLeft(arr);
    //merge right half
    mergeRight(arr);
    console.log(mergeLeft(arr));
 }  

}
mergeSort([15, 4, 3, 6]);