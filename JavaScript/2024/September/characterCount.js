/**
 * Count number of ocuurence of Character on a string 
 * Input : welcome
 * Output : {
 *     w:1,
 *     e:2,
 *     l:1,
 *     c:1,
 *     o:1,
 *     m:1 
 * }
 */

const countCharaters =(input='welcome') =>{
    let stringArr = input.split('');
    let obj={};
    for(let el of stringArr){
        if(obj[el]){
           obj[el]=obj[el] +1;
        }else{
            obj[el]=1;
        }
        
    }
    return obj;
}



console.log(countCharaters());