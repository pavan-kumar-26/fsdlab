function part(obj){
    let [intrest1,intrerst2]=obj.arr
    let{name,age}=obj
    return {name,age,intrest1,intrerst2}
}
let obj={
    name:'anc',
    age:12,
    arr:['cricket','football','hockey'],
};
console.log(part(obj));