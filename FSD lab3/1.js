const b=document.getElementById('but');
b.addEventListener('click',function(){
    const txt=document.getElementById('grt');
    let s = txt.value;
    greet(s,mainGreet);
})
function greet(s,myCallBack){
    myCallBack(s);
}
function mainGreet(s){
    alert(s);
}