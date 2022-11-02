
/* Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
 */


let modalita = document.getElementById("modalita")

let sceltaDifficolta;


function AvviaGioco(){

    if(modalita.value == 1){

        sceltaDifficolta = 100

    }else if(modalita.value == 2){

        sceltaDifficolta = 81

    }else{

        sceltaDifficolta = 49

    }

    let box = document.getElementById("box")

    box.innerHTML = ""

    for (let x = 1; x <= sceltaDifficolta; x++) {
    

        let divNuovo = document.createElement("div")
        divNuovo.classList.add("box-js")

        
        if(sceltaDifficolta == 81){
        
            divNuovo.classList.add("ms-w-normale")
    
        }else if( sceltaDifficolta == 49){
    
            divNuovo.classList.add("ms-w-difficile")
    
        }
    
        divNuovo.addEventListener('click' , function(){
            
            this.classList.toggle('ms-color-custom')
            console.log(this)
            console.log(`il numero selezionato è: ${x}`);
            
        })
    
    
        if (x % 3 == 0 && x % 5 == 0) {
    
            divNuovo.innerHTML = `<h4>${x}</h4>`;
        
    
        } else if (x % 5 == 0) {
    
            divNuovo.innerHTML = `<h4>${x}</h4>`;
    
            
        } else if (x % 3 == 0) {
    
            divNuovo.innerHTML = `<h4>${x}</h4>`;
            
    
        } else {
    
            divNuovo.innerHTML = `<h4>${x}</h4>`;
           
        }
    
        box.append(divNuovo)
    
    }

}

