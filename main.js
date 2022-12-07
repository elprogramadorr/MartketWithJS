const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenuApp = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCart = document.querySelector('.navbar-shopping-cart');
const carrito = document.querySelector('.product-detail');
navEmail.addEventListener('click',showMenu);
iconMenuApp.addEventListener('click',showMobileMenu);
iconCart.addEventListener('click',showShoppingCart);
function showMenu(event){
    if(desktopMenu.classList.contains('inactive')){
        desktopMenu.classList.remove('inactive');
    }else{
        desktopMenu.classList.add('inactive');
    }
}

function showMobileMenu(){
    if(mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.remove('inactive');
        carrito.classList.add('inactive');
    }else{
        mobileMenu.classList.add('inactive');
    }
}
function showShoppingCart(){
    carrito.classList.toggle('inactive');
    if(!carrito.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
    }
}