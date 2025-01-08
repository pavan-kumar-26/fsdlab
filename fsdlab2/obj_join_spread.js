function mix(o1,o2,o3){
    fin={...o1,...o2,...o3}
    return fin
}
let o1={
    name:"cvr",
    age:12
};
 let o2={
    addr:"mangal",
    city:"hyd"
};
let o3={
    theme:"engg",
    lang:"Eng"
};
console.log(mix(o1,o2,o3));