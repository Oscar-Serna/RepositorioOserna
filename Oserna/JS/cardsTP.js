const topCTP1 = document.getElementById('topCTP1');
const topCTP2 = document.getElementById('topCTP2');
const topCTP3 = document.getElementById('topCTP3');
const topCTP4 = document.getElementById('topCTP4');


topCTP1.addEventListener('click', () => {
    let arrow = document.getElementById('A1');
    let bottomCardTP = document.getElementById('bCTP1');
    let contArrowCardTP = document.getElementById('cACTP1');
    let titleBottomCardTP = document.getElementById('tBCTP1');

    if(bottomCardTP.classList.contains('bCTP-I')){
        // Bottom card
        bottomCardTP.classList.remove('bCTP-I');
        bottomCardTP.classList.add('bCTP-A');
        // Arrow
        arrow.classList.add('arrow180deg');
        // Border radius
        contArrowCardTP.classList.add('borderUp');
        // Animacion title
        function titleBCTP(){
            titleBottomCardTP.classList.remove('titleBCTP-I');
            titleBottomCardTP.classList.add('titleBCTP-V');
        }
        setTimeout(titleBCTP, 250);
    }else{
        // Bottom card
        bottomCardTP.classList.remove('bCTP-A');
        bottomCardTP.classList.add('bCTP-I');
        // Arrow
        arrow.classList.remove('arrow180deg');
        // Border radius
        contArrowCardTP.classList.remove('borderUp');
        titleBottomCardTP.classList.add('titleBCTP-I');
        // Animación title
        titleBottomCardTP.classList.remove('titleBCTP-V');
    }
})

topCTP2.addEventListener('click', () => {
    let arrow = document.getElementById('A2');
    let bottomCardTP = document.getElementById('bCTP2');
    let contArrowCardTP = document.getElementById('cACTP2');
    let titleBottomCardTP = document.getElementById('tBCTP2');

    if(bottomCardTP.classList.contains('bCTP-I')){
        // Bottom card
        bottomCardTP.classList.remove('bCTP-I');
        bottomCardTP.classList.add('bCTP-A');
        // Arrow
        arrow.classList.add('arrow180deg');
        // Border radius
        contArrowCardTP.classList.add('borderUp');
        // Animacion title
        function titleBCTP(){
            titleBottomCardTP.classList.remove('titleBCTP-I');
            titleBottomCardTP.classList.add('titleBCTP-V');
        }
        setTimeout(titleBCTP, 250);
    }else{
        // Bottom card
        bottomCardTP.classList.remove('bCTP-A');
        bottomCardTP.classList.add('bCTP-I');
        // Arrow
        arrow.classList.remove('arrow180deg');
        // Border radius
        contArrowCardTP.classList.remove('borderUp');
        titleBottomCardTP.classList.add('titleBCTP-I');
        // Animación title
        titleBottomCardTP.classList.remove('titleBCTP-V');
    }
})

topCTP3.addEventListener('click', () => {
    let arrow = document.getElementById('A3');
    let bottomCardTP = document.getElementById('bCTP3');
    let contArrowCardTP = document.getElementById('cACTP3');
    let titleBottomCardTP = document.getElementById('tBCTP3');

    if(bottomCardTP.classList.contains('bCTP-I')){
        // Bottom card
        bottomCardTP.classList.remove('bCTP-I');
        bottomCardTP.classList.add('bCTP-A');
        // Arrow
        arrow.classList.add('arrow180deg');
        // Border radius
        contArrowCardTP.classList.add('borderUp');
        // Animacion title
        function titleBCTP(){
            titleBottomCardTP.classList.remove('titleBCTP-I');
            titleBottomCardTP.classList.add('titleBCTP-V');
        }
        setTimeout(titleBCTP, 250);
    }else{
        // Bottom card
        bottomCardTP.classList.remove('bCTP-A');
        bottomCardTP.classList.add('bCTP-I');
        // Arrow
        arrow.classList.remove('arrow180deg');
        // Border radius
        contArrowCardTP.classList.remove('borderUp');
        titleBottomCardTP.classList.add('titleBCTP-I');
        // Animación title
        titleBottomCardTP.classList.remove('titleBCTP-V');
    }
})

topCTP4.addEventListener('click', () => {
    let arrow = document.getElementById('A4');
    let bottomCardTP = document.getElementById('bCTP4');
    let contArrowCardTP = document.getElementById('cACTP4');
    let titleBottomCardTP = document.getElementById('tBCTP4');

    if(bottomCardTP.classList.contains('bCTP-I')){
        // Bottom card
        bottomCardTP.classList.remove('bCTP-I');
        bottomCardTP.classList.add('bCTP-A');
        // Arrow
        arrow.classList.add('arrow180deg');
        // Border radius
        contArrowCardTP.classList.add('borderUp');
        // Animacion title
        function titleBCTP(){
            titleBottomCardTP.classList.remove('titleBCTP-I');
            titleBottomCardTP.classList.add('titleBCTP-V');
        }
        setTimeout(titleBCTP, 250);
    }else{
        // Bottom card
        bottomCardTP.classList.remove('bCTP-A');
        bottomCardTP.classList.add('bCTP-I');
        // Arrow
        arrow.classList.remove('arrow180deg');
        // Border radius
        contArrowCardTP.classList.remove('borderUp');
        titleBottomCardTP.classList.add('titleBCTP-I');
        // Animación title
        titleBottomCardTP.classList.remove('titleBCTP-V');
    }
})