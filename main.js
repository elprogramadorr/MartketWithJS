const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenuApp = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconCart = document.querySelector('.navbar-shopping-cart');
const carrito = document.querySelector('#shoppingCart');
const productDetail = document.querySelector('#productDetail');
const closeProductDetails = document.querySelector('.product-detail-close');
closeProductDetails.addEventListener('click',closeDetails);
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
    productDetail.classList.add('inactive');
    if(mobileMenu.classList.contains('inactive')){
        mobileMenu.classList.remove('inactive');
        carrito.classList.add('inactive');
    }else{
        mobileMenu.classList.add('inactive');
    }
}
function showShoppingCart(){
    carrito.classList.toggle('inactive');
    productDetail.classList.add('inactive');
    if(!carrito.classList.contains('inactive')){
        mobileMenu.classList.add('inactive');
    }
}

/*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */ 
function openProductDetails(){
    mobileMenu.classList.add('inactive');
    carrito.classList.add('inactive');
    productDetail.classList.remove('inactive');
}
function closeDetails(){
    productDetail.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 234,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    
});

productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/61e+sZ9rgNL._AC_SL1500_.jpg'
});

productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://m.media-amazon.com/images/I/61eExL-rIAL._AC_SL1001_.jpg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/8ea578f6c07847fca2d0ac85011d7f1f_9366/Tenis_para_Mountain_Bike_Five_Ten_Freerider_Negro_FW2835_01_standard.jpg'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://cdn.siroko.com/s/files/1/1220/6874/products/siroko-tech-k3s-clearfog-lente-antiniebla-frontal/1200x/crop_center.jpg?v=1635209603'
});
function renderProducts(arr){
    for(product of arr){
        const productCart = document.createElement('div');
        productCart.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openProductDetails);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src',"./icons/bt_add_to_cart.svg");
    
        productFigure.appendChild(productImgCart);
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productPrice);
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
        productCart.appendChild(productImg);
        productCart.appendChild(productInfo);
    
    
        const cardsContainer = document.querySelector('.cards-container');
        cardsContainer.appendChild(productCart);
    }
}
renderProducts(productList);
