let numeri= [];

for (let i = 0; i < 100; i++) {
    numeri.push(i);  
}



const myFunction = (array, a, b)=>{
    let arrayFilter = [];
    for (let j = 0; j < 100; j++) {
        if(j > a && j < b){
            arrayFilter.push(array[j])
        }
        
    }
    return arrayFilter;
}



console.log(`Jsnack 2 : ${myFunction(numeri, 20, 30)}`);

const myFunction2 = (array, a, b)=>{
const arrayFilter =  array.filter((element, index, array)=>{
     return index >a && index < b;
    
 });
 return arrayFilter;
}

console.log(myFunction2(numeri, 20, 30));
