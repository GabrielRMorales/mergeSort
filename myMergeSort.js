function mergeSort(arr){
  var length=arr.length;
  var leftArr=[];
  
  var rightArr=[];
    function sortLeft(arr){
      var tempLeftArr=[];
      for (var i=0;i<arr.length/2;i++){
        tempLeftArr.push(arr[i]);
      }
      console.log("temp left arr "+tempLeftArr);
      var halvedLeftArr=mergeSort(tempLeftArr);
      if (halvedLeftArr[i]>halvedLeftArr[i+1]){
        var temp=halvedLeftArr[i];
        halvedLeftArr[i]=halvedLeftArr[i+1];
        halvedLeftArr[i+1]=temp;
      }
      leftArr=halvedLeftArr;
      console.log("halved Arr left "+leftArr);
      return leftArr;
    }
   
    function sortRight(arr){
    var tempRightArr=[];  
      for (var i=arr.length-1;i>=arr.length/2;i--){
        tempRightArr.push(arr[i]);
      }
      console.log("temp right arr "+tempRightArr);
      var halvedRightArr=mergeSort(tempRightArr);
      if (halvedRightArr[i]>halvedRightArr[i+1]){
        var temp=halvedRightArr[i];
        halvedRightArr[i]=halvedRightArr[i+1];
        halvedRightArr[i+1]=temp;
      }
      rightArr=halvedRightArr;
      console.log("halved Arr right "+rightArr);
      return rightArr;
    }
  function merge(arr1,arr2){
      var mergedArr=[];
      var totalLength=arr1.length+arr2.length;
      for (var i=0;i<totalLength/2;i++){
      if (arr1[i]>arr2[i]){
        mergedArr.push(arr2[i]);
        mergedArr.push(arr1[i]);
        }
      else {
        console.log("testr");
        mergedArr.push(arr1[i]);
        mergedArr.push(arr2[i]);
      }
      }
      console.log("MERGED ARR "+mergedArr);
      return mergedArr;
    }
  if (length<2){
    return arr;
  }
  else{
    leftArr=sortLeft(arr);
    rightArr=sortRight(arr);
   return merge(leftArr,rightArr);
   // console.log("LEFT ARR "+leftArr);
    // console.log("RIGHT ARR "+rightArr);
    
    }
}

mergeSort([15, 5, 9, 2, 3, 6, 4, 20]);