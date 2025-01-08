function tot(a){
    let sum=0;
    [...a].forEach(ele=>{
        sum+=ele
    })
    return sum
}
let arr=[1,2,3,4,5,6,7,8,9,10]
let sum=tot(arr)
console.log(sum)