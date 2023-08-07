
// You should implement your task here.

module.exports = function towelSort (matrix) {
     let arr=[]
     let count =0
     if(matrix === undefined){
          return []
     }else{
          for(let key of matrix){
     count++
       if(count%2===0){
         key.reverse().map(index=>{arr.push(index)})
       }else{
          key.map(index=>arr.push(index))
       }
     
         
     }
     return arr  
     }
  
}
