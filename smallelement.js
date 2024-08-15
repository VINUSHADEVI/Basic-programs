var arr=[3,4,6,7,8];
var smallest=arr[0];
for(var i=1;i<arr.length;i++){
    if(arr[i]<smallest){
        smallest=arr[i];
    }
}
console.log(smallest)