const b=document.getElementById('but');
b.addEventListener('click',function(){
    const s=document.getElementById('grt');
    let n=Number(s.value);
    n=n*1000
    timer(n,greet);
})
function timer(n,greet){
    setTimeout(greet,n);
}
function greet(){
    alert("hello ash")
}