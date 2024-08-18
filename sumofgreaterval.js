let arr=[1,3,6,9,2]
let target_val=2
let sum=0;
for(let i=0;i<=arr.length;i++)
{
    if(arr[i]>target_val)
    {
        sum+=arr[i]
    }
}
console.log("sum:",sum)