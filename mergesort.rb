def merge(arr)

def left(arr)
 merge(arr[0..(arr.length/2-1)])
end

def right(arr)
  merge(arr[arr.length/2..-1])
end

def combine(left, right)
  newarr=[]
  while (left.size>0 || right.size>0)
    if left.size>0 && right.size>0
      if left[0]<right[0]
        newarr.push(left[0])
        left.shift
      else 
        newarr.push(right[0])
        right.shift
      end
    elsif left.size>0&&right.size==0 
      newarr.push(left[0])
      left.shift
    elsif right.size>0&&left.size==0  
      newarr.push(right[0])
      right.shift
    end
  end
  return newarr
end

if (arr.size>1)
left_arr=left(arr)
else
  return arr
end
if arr.size>1
right_arr=right(arr)
else
  return arr
end
combine(left_arr, right_arr)
end

merge([108,15,50,4,8,42,23,16,9,55])