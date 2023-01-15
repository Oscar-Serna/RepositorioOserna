let topTypesDiscount = document.getElementById('typesDiscount').offsetTop;
let header = document.querySelector('header');
let sectionLogo = document.querySelector('.sectionLogo');

function scrollTop(){
    try{
        const scrollTop = document.documentElement.scrollTop;
        if(topTypesDiscount - 75 <= scrollTop){
            header.classList.add('headerWhite');
            header.classList.remove('moreBoxShadowWhite');
            sectionLogo.classList.add('sectionLogoBlack');
        }else{
            header.classList.remove('headerWhite');
            header.classList.add('moreBoxShadowWhite');
            sectionLogo.classList.remove('sectionLogoBlack');
        }
    }catch{}
}