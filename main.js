const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
navEmail.addEventListener('click',showMenu);
function showMenu(event){
    console.log("bebito fiu fiu ");
    if(desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.remove('inactive');
    }else{
        desktopMenu.classList.add('inactive');
    }
}