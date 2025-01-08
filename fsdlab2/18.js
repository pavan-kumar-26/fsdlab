const arr=[1,2,3,4]
    const customIterator={
        curr:arr.length-1,
        next:function(){
            if(this.curr>=0){
                return{
                value:arr[this.curr--],
                done:false
            };
            
        }else{
            return{
                done:true
            }
        }
    }
}
console.log(customIterator.next().value)
console.log(customIterator.next().value)
console.log(customIterator.next().value)
console.log(customIterator.next().value)