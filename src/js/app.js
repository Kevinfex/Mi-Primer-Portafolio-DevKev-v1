

let modeTheme = '';

const divLoader = document.querySelector('.loader');
window.addEventListener('load', ()=> {
    divLoader.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function () {
    modeTheme = localStorage.getItem('mode') || "";

    //eventListeners();
    iniciarApp();
    darkMode();
});

function iniciarApp() {
    typedText();
}

function typedText() {
    const typed = new Typed('.typed', {
        // strings: [
        //     'Web Developer.',
        //     'Front-end Developer.'
        // ],
        stringsElement: '#array-words', // ID del elemento que contiene cadenas de texto a mostrar
        typeSpeed: 75, // Velocidad en ms para poner una letra
        startDelay: 300, // Tiempo de retrazo en iniciar la animación(escritura inicia y termina y vuelve a iniar). 
        backSpeed: 30, // Velocidad en ms para borrar una letra
        smartBackspace: false, // Elimina solamente las palabras que son diferentes a una cadena de texo u oración
        // shuffle: false, // Orden aleatorio en mostrar los textos. false recomendado
        backDelay: 600, // Tiempo de espera despues de que termina de escribir una palabra
        loop: true, // Repite el array de strings
        loopCount: false, // Cantidad de veces a repetir el array. false = infinito
        showCursor: true, // Mostrar cursor palpitando
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
    });
}

function darkMode() {
    const botonDarkMode = document.querySelectorAll('.button__dark-mode');
    const iconDarkMode = document.querySelectorAll('.fa-moon');
      
    if (modeTheme == 'dark') {
        document.body.classList.toggle('dark-mode');
        iconDarkMode.forEach(element => {
            if (element.classList.contains('fa-moon')) {
                element.classList.remove('fa-moon');
                element.classList.add('fa-sun');
            } 
        });
    }

    botonDarkMode.forEach(button => button.addEventListener('click', ()=> {
        document.body.classList.toggle('dark-mode');
        
        iconDarkMode.forEach(element => {
            if (element.classList.contains('fa-moon')) {
                element.classList.remove('fa-moon');
                element.classList.add('fa-sun');

                localStorage.setItem('mode', 'dark');
            } else {
                element.classList.remove('fa-sun');
                element.classList.add('fa-moon');

                localStorage.setItem('mode', 'light');
            }
        });
        
    }));
}