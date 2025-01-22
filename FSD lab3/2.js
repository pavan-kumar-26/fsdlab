const b=document.getElementById('but');
b.addEventListener('click',function(){
    const s=document.getElementById('grt');
    let num=s.value;
    mul(num,sub);
})
function mul(num,sub){
    num=num*2;
    sub(num,add)
}
function sub(num,add){
    num=num-3;
    add(num,display)
}
function add(num,display){
    num=num+10
    display(num)
}
function display(num){
    alert(num)
}