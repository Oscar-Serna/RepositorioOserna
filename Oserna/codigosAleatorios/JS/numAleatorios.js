const abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];
const numeros = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9']
const body = document.getElementById('body')
const pAlert = document.querySelector('.pAlert');
const numeroPosicion = document.querySelector('.numero');

function arrayAleatorio(){
    let eleccion = Math.random().toFixed(0).toString();
    if(eleccion == '0'){
        return abecedario;
    }
    return numeros;
}
function letraAleatoria(tipoArray){
    if(tipoArray == abecedario){
        return tipoArray[(Math.random()*24).toFixed(0)];
    }
    return tipoArray[(Math.random()*9).toFixed(0)];
}
function digitos(){
    let cuatroDigitos = '';
    for(let i = 0; i < 4; i++){
        cuatroDigitos += letraAleatoria(arrayAleatorio());
    }
    return cuatroDigitos;
}

function alertProgress(numero){
    pAlert.textContent = 'En progreso...';
    numeroPosicion.textContent = `No. ${numero}`;
    pAlert.classList.add('alertProgress-act');
}

function alertSuccess(){
    pAlert.textContent = 'Finalizado';
    if(pAlert.classList.contains('alertProgress-act')){
        pAlert.classList.remove('alertProgress-act');
        pAlert.classList.add('alertSuccess-act')
    }
}

let p = 1;
function generarCodigos(){
    let numeroCodigos = document.querySelector('.inputNumCod').value;
    const generador = setInterval(() => {    
        alertProgress(p);
        body.innerHTML += `'${digitos()}-${digitos()}-${digitos()}-${digitos()}',`;
        if(p >= numeroCodigos){
            clearInterval(generador);
            alertSuccess();
        }
        p++;
    }, -10);
}
