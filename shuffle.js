Array.prototype.shuffle = function(){
    
    const length = this.length
    
    const mix = []
    const correct = []

    while(mix.length < length)
        {
       const num = Math.floor(Math.random()*length) 
            if(!mix.includes(num)){
            mix.push(num)
            }
        }
    for(let i = 0; i < length ; i++)
        {
            correct[i]=this[mix[i]]
        }
        return correct
}
