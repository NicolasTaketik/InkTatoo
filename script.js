let menuButton = document.getElementById('menu-icon');

menuButton.addEventListener('click', () => {
    if( menuButton.classList.contains('open')) {
        menuButton.classList.remove('open');
        document.getElementById('nav-item').classList.add('hidden');
    }
    else {
        menuButton.classList.add('open');
        document.getElementById('nav-item').classList.remove('hidden');

    }
});

let mobileNavItem = document.querySelectorAll("#nav-item a");

mobileNavItem.forEach( a => {
    a.addEventListener('click', () => {
        menuButton.classList.remove('open');
        document.getElementById('nav-item').classList.add('hidden');
    })
})

