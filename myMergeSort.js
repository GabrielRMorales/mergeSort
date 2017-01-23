function mergeSort(arr){
  var length=arr.length;
  var initial=length;
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
      var length=0;
      if (arr1.length>arr2.length){
        length=arr1.length;
      }
      else {
        length=arr2.length;
      }
      for (var i=0;i<length;i++){
      if (arr1[0]<arr2[0]){
        mergedArr.push(arr1[0]);
        arr1.splice(0,1);
        console.log(arr1);
      }
      else if (arr2[0]<arr1[0]){
        mergedArr.push(arr2[0]);
        arr2.splice(0,1);
        console.log(arr2);
      }
      if (i==length-1){
       
        if (arr1.length>arr2.length){
           if (arr2[i]!=undefined){
          mergedArr.push(arr2[i]);
        }
        for (var x=0;x<arr1.length;x++){
          
          mergedArr.push(arr1[x]);
        }
      }
      else if (arr2.length>arr1.length){
        if (arr1[i]!=undefined){
          mergedArr.push(arr1[i]);
        }
        for (var x=0;x<arr2.length;x++){
          mergedArr.push(arr2[x]);
        }
      }
      else if (arr1.length==arr2.length){
        console.log("arr1 is now "+arr1);
        console.log("arr2 is now "+arr2);
        if (arr2[0]>arr1[0]){
          mergedArr.push(arr1[0]);
          mergedArr.push(arr2[0]);
        }
        
        else{
          mergedArr.push(arr2[0]);
          mergedArr.push(arr1[0]);
        }
      }
      }
     
  }
  if (initial-mergedArr.length==(arr1.length-1)+(arr2.length-1)&&initial-mergedArr.length!=0){
      console.log("last add");
      var last1=arr1[arr1.length-1]
      var last2=arr2[arr2.length-1]
      if (last1>last2){
      mergedArr.push(last2);
      mergedArr.push(last1);
      }
      else if (last2>last1){
      mergedArr.push(last1);
      mergedArr.push(last2);  
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
    
    }
}

mergeSort([15, 5, 9, 2, 3, 6, 8,4, 20]);