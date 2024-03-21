const btnMode = document.getElementById('mode_btn');

btnMode.addEventListener('click', () => {
    changeMode();
}); 


function changeMode(){
    const main = document.querySelector('main');
    const titulos = document.querySelectorAll('h1');
    const textos = document.querySelectorAll('.mode_txt');
    main.classList.toggle('dark_mode');

    titulos.forEach((titulo) => titulo.classList.toggle('dark_mode_titulo'));
    textos.forEach((texto) => texto.classList.toggle('dark_mode_texto'));

    const imgLight = document.getElementById('img_light');
    const imgDark = document.getElementById('img_dark');
    imgDark.classList.toggle('mode_dark_off');
    imgDark.classList.toggle('mode_dark_on');
   
    imgLight.classList.toggle('mode_dark_on');
    imgLight.classList.toggle('mode_dark_off');   
}

