//1.Do the below programs in anonymous function and IIFE.

//a.Print odd numbers in an array.

//anonymous function
var a =[2,3,5,8];
var res = function(arr){
    var temp = [];
    for(var i=0;i<arr.length;i++){
       if(arr[i]%2!==0){
            temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(res(a));


//IIFE function
(function(arr){
  var temp=[];
  for(var i=0;i<arr.length;i++){
    if(arr[i]%2!==0){
      temp.push(arr[i]);
    }
  }
console.log(temp);
})(a)

//b.Convert all the strings to title caps in a string array.

//anonymous function
var inputString = ["apple","mango","orange","guava"];

var res = function(arr){
  var temp=[];
  for(var i=0;i<arr.length;i++){
    temp.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return temp;
}

console.log(res(inputString));

//IIFE function
(function(arr){
  var temp=[];
  for(var i=0;i<arr.length;i++){
    temp.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  console.log(temp);
})(inputString)

//c.Sum of all numbers in an array

//anonymous function
var a = [12,34,56,78];
var res = function (arr){
  var sum = 0;
  for(var i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum;
}
console.log(res(a));

//IIFE
(function (arr){
  var sum = 0;
  for(var i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  console.log(sum);
})(a)

//d. Return all the prime numbers in an array.

//anonymous function
var a = [2,3,4,6,7,11,12,13];
var res = function(arr){
  var temp = [];
  for(var i=0;i<arr.length;i++){
    var count = 0;
    for(var j=2;j<arr[i];j++){
      if(arr[i]%j===0){
        count++;
      }
    }
    if(count==0){
      temp.push(arr[i]);
    }
  }
  return temp;
}
console.log(res(a));

//IIFA
(function(arr){
  var temp = [];
  for(var i=0;i<arr.length;i++){
    var count = 0;
    for(var j=2;j<arr[i];j++){
      if(arr[i]%j===0){
        count++;
      }
    }
    if(count==0){
      temp.push(arr[i]);
    }
  }
  console.log(temp);
})(a)

//e.Return all the palindromes in an array.

//anonymous function
var a = [131,21,44,2442,5212,25552];
var res = function(arr){
  var temp = [];
  for(var i=0;i<arr.length;i++){
    var tem=0;
    var dup=arr[i];
    while(dup!==0){
      var rem=dup%10;
      dup=parseInt(dup/10);
      tem=tem*10+rem;
    }
    if(arr[i]===tem){
      temp.push(arr[i]);
    }
  }
  return temp;
}
console.log(res(a));

//IIFE functions
(function(arr){
  var temp = [];
  for(var i=0;i<arr.length;i++){
    var tem=0;
    var dup=arr[i];
    while(dup!==0){
      var rem=dup%10;
      dup=parseInt(dup/10);
      tem=tem*10+rem;
    }
    if(arr[i]===tem){
      temp.push(arr[i]);
    }
  }
  console.log(temp);
})(a)

//f.Return median of two sorted arrays of the same size.

//anonymous function
var a = [7,5,4]
var b = [3,2,6]
var c = a.concat(b).sort((a,b) => a-b);
var res = function(arr){
  var len = parseInt(arr.length/2);
  if((arr.length)%2===0){
    var med = (arr[len-1]+arr[len])/2;
    return med;
  }
  return(arr[len]);
}
console.log(res(c));

//IIFE function
(function(arr){
  var len = parseInt(arr.length/2);
  if((arr.length)%2===0){
    var med = (arr[len-1]+arr[len])/2;
    console.log(med);
  }
  else{
  console.log(arr[len]);
  }
})(c)

//g. Remove duplicates from an array

//anonymous function
var a = [12,14,15,12,12];
var res=function(arr){
for(var i=0;i<arr.length;i++){
  for(var j=i+1;j<arr.length;j++){
    if(arr[i]===arr[j]){
      arr.splice(j,1);
      j--;
    }
  }
}
return arr;
}
console.log(res(a));

//IIFE function
(function(arr){
  for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
      if(arr[i]===arr[j]){
        arr.splice(j,1);
        j--;
      }
    }
  }
  console.log(arr);
  })(a)

//h.Rotate an array by k items

//anonymous function
var a = [12,14,15,16,17];
var k=3;
var res = function(arr,n){
  return(arr.splice(n).concat(arr.splice(0,n)));
}
console.log(res(a,k));

//IIFE function
var a = [12,14,15,16,17];
(function(arr,n){
  var b=arr.splice(n).concat(arr.splice(0,n));
  console.log(b);
  })(a,k)




//2.Do the below programs in arrow function.

//a.Print odd numbers in an array.
var a =[2,3,5,8];
var res = (arr)=>{
    var temp = [];
    for(var i=0;i<arr.length;i++){
       if(arr[i]%2!==0){
            temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(res(a));

//b.Convert all the strings to title caps in a string array.
var inputString = ["apple","mango","orange","guava"];

var res = (arr)=>{
  var temp=[];
  for(var i=0;i<arr.length;i++){
    temp.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
  }
  return temp;
}

console.log(res(inputString));

//c.Sum of all numbers in an array

var a = [12,34,56,78];
var res = (arr)=>{
  var sum = 0;
  for(var i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  return sum;
}
console.log(res(a));

//d. Return all the prime numbers in an array.

var a = [2,3,4,6,7,11,12,13];
var res = (arr)=>{
  var temp = [];
  for(var i=0;i<arr.length;i++){
    var count = 0;
    for(var j=2;j<arr[i];j++){
      if(arr[i]%j===0){
        count++;
      }
    }
    if(count==0){
      temp.push(arr[i]);
    }
  }
  return temp;
}
console.log(res(a));

//e.Return all the palindromes in an array.

var a = [131,21,44,2442,5212,25552];
var res = (arr)=>{
  var temp = [];
  for(var i=0;i<arr.length;i++){
    var tem=0;
    var dup=arr[i];
    while(dup!==0){
      var rem=dup%10;
      dup=parseInt(dup/10);
      tem=tem*10+rem;
    }
    if(arr[i]===tem){
      temp.push(arr[i]);
    }
  }
  return temp;
}
console.log(res(a));




