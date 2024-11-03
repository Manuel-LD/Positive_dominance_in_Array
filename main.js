//Positive dominance in Array
/*Write a function to determine if an array is positively dominant.
An array is positively dominant when the majority of its elements are positive.
 

Example:
- `positiveDom([-1, -3, -5, 4, 6767])` should return `false`.*/

const PD = [-1, -3, -5, 4,7,6,8];
let n = 0;
let p = 0;
function positiveDom(array){
    for(let i=0;i<array.length;i++){
        if(array[i] < 0){
            n += 1
        }else{
            p += 1
        }
    }if( p > n){
        console.log(true)
    }else{
        console.log(false)
    }
    
}positiveDom(PD)