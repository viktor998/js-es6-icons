let modello = ['MountainBike', 'BMX', 'Lombardo'];
let peso = [15, 16, 25];

let modelloPeso = [];

const nomeBici = 'modello';
const pesoBici = 'peso'; 


for (let i = 0; i < modello.length; i++) {
    const biciObject={
        [nomeBici] : modello[i],
        [pesoBici] : peso[i]
    }
    modelloPeso.push(biciObject);
}



let temp = modelloPeso[0].peso;

modelloPeso.forEach((element)=>{

    if(element.peso < temp){
        temp = element.peso;
     
    }
    
});

const biciPiccola = modelloPeso.filter((item) => item.peso == temp);

console.log(biciPiccola)

