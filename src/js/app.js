document.addEventListener('DOMContentLoaded', function () {

    //eventListeners();

    darkMode();
});



function darkMode() {
    const botonDarkMode = document.querySelectorAll('.button__dark-mode');
    const iconDarkMode = document.querySelectorAll('.fa-moon');
    console.log(botonDarkMode)
    console.log(iconDarkMode)

    botonDarkMode.forEach(button => button.addEventListener('click', ()=> {
        document.body.classList.toggle('dark-mode');
        
        iconDarkMode.forEach(element => {
            if (element.classList.contains('fa-moon')) {
                element.classList.remove('fa-moon');
                element.classList.add('fa-sun');
            } else {
                element.classList.remove('fa-sun');
                element.classList.add('fa-moon');
            }
        });
        
    }));

    // botonDarkMode.addEventListener('click', function() {
    //     

        
    // });
}