function mergeSort(arr){
  var length=arr.length;
  var lengthDivided=arr.length/2;
  if (length<2){
    return arr;
  }
  else{
    var leftArr=[];
    var tempLeftArr=[];
    
    function sortLeft(arr){
      for (var i=0;i<arr.length/2;i++){
        tempLeftArr.push(arr[i]);
      }
      console.log("temp left arr "+tempLeftArr);
      var halvedArr=mergeSort(tempLeftArr);
      if (halvedArr[i]>halvedArr[i+1]){
        var temp=halvedArr[i];
        halvedArr[i]=halvedArr[i+1];
        halvedArr[i+1]=temp;
      }
      leftArr=halvedArr;
      console.log("halved Arr left "+leftArr);
      return leftArr;
    }
    var rightArr=[];
    var tempRightArr=[];
    function sortRight(arr){
      for (var i=length-1;i>=arr.length/2;i--){
        tempRightArr.push(arr[i]);
      }
      console.log("temp right arr "+tempRightArr);
      var halvedArr=mergeSort(tempRightArr);
      if (halvedArr[i]>halvedArr[i+1]){
        var temp=halvedArr[i];
        halvedArr[i]=halvedArr[i+1];
        halvedArr[i+1]=temp;
      }
      rightArr=halvedArr;
      console.log("halved Arr right "+rightArr);
      return rightArr;
    }
    function merge(arr1,arr2){
      var mergedArr=[];
      var totalLength=arr1.length+arr2.length;
      for (var i=0;i<arr1.length-1;i++){
      if (arr1[i]>arr2[i]){
        mergedArr.push(arr1[i]);
        mergedArr.push(arr2[i]);
        }
      else {
        mergedArr.push(arr2[i]);
        mergedArr.push(arr1[i]);
      }
      }
      return mergedArr;
    }
    leftArr=sortLeft(arr);
    rightArr=sortRight(arr);
    console.log("LEFT ARR "+leftArr);
    console.log("RIGHT ARR "+rightArr);
    return merge(leftArr,rightArr);
    }
}

mergeSort([15, 5, 9, 2, 3, 6, 4, 20]);