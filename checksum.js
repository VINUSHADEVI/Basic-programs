const arr=[1,2,3,4,5];
let ispositive="true";
for(let i=0;i<arr.length;i++){
    if(arr[i]<0){   
        ispositive="false";
    }
    
}
console.log(ispositive)