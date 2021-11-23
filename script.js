const items_loteria = document.querySelectorAll('.items_loteria');
let cartas_restantes = document.querySelector('#cartas_restantes');
const btnGenerate = document.querySelector('#btnGenerate');
let randomNumber = Math.floor((Math.random()*54)+1);
let cards = [17,32,8,31,46,16,6,9,52,18,19,15,7,44,43,27];

const generateRandomCard = () => {
    //Generamos un arreglo con numeros random que representan a las 54 cartas
    cards = [randomNumber]

    for(let i=0;i<15;i++){
        randomNumber = Math.floor((Math.random()*54)+1);
        while(cards.includes(randomNumber)){
            randomNumber = Math.floor((Math.random()*54)+1);
        }
        cards.push(randomNumber);
    }
        items_loteria.forEach((item,index)=>{
        let card_number = cards[index];
        item.style.background = `url('img/Carta (${card_number}).jpg')`;
        item.style.backgroundSize='cover';
    })
}

// btnGenerate.addEventListener('click',generateRandomCard())


//Generamos las cartas random de acuerdo con el arreglo que generamos con anterioridad
items_loteria.forEach((item,index)=>{
    let card_number = cards[index];
    item.style.background = `url('img/Carta (${card_number}).jpg')`;
    item.style.backgroundSize='cover';
})

//Quitamos o ponemos la piedra
const putRock = (el) => {
   let rock = el.children;
   rock[0].classList.toggle('rock');

   let rocks = document.querySelectorAll('.rock');
   cartas_restantes.innerHTML = `Cartas Restantes: ${rocks.length}`;

   if(rocks.length === 0) {
     cartas_restantes.style.color = 'forestgreen';
     cartas_restantes.innerHTML = '¡¡BUUUUEEENAAAASSSS!!'
   }
}