function mergeSort(arr){
  var newArr=[];
  if (arr.length<2){
    return arr;
  }
  else{
    //merge left half
    for (var i=0;i<arr.length/2;i++){
    
      if (arr[i]>arr[i+1]){
        var temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
      }
      console.log("left "+ arr[i]);
  }
    //merge right half
    for (var i=arr.length-1;i>=arr.length/2;i--){
    
      if (arr[i]<arr[i-1]){
        var temp=arr[i];
        arr[i]=arr[i-1];
        arr[i-1]=temp;
      }
      console.log("right "+ arr[i]);
  }
 }  
 console.log(arr);
}
mergeSort([15, 4, 3, 6]);