function merge(a){
    let l=[]
    a.forEach(element => {
        [...element].forEach(key=>{
            l.push(key)
        })
    });
    return l;
}
let l =merge([[1,2],[3,4],[5,6]]);
console.log(l);
