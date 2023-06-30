const body = document.querySelector('body');

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description : 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/331788/pexels-photo-331788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'This screen is perfect for your home office, it has a 4k resolution and a 32-inch screen.'
});
productList.push({
    name: 'Computer',
    price: 620,
    image: 'https://media.istockphoto.com/id/1314343964/es/foto/unidad-de-sistema-de-gama-alta-para-el-primer-plano-de-la-computadora-de-juego.jpg?s=2048x2048&w=is&k=20&c=4ZfOgrUzagfHV0jGwuxoA_3IPZldmI9eqG3aBX-P0_Q=',
    description: 'Powerful gaming CPU designed for optimal performance, delivering immersive gameplay and smooth multitasking.'
});

//product detail structure
const product_detail = document.createElement('aside');
product_detail.setAttribute('id', 'productDetail');
product_detail.classList.add('inactive');
body.insertBefore(product_detail, body.children[2]);

const product_detail_close = document.createElement('div');
product_detail_close.classList.add('product-detail-close');
product_detail.appendChild(product_detail_close);

const img_detail_close = document.createElement('img');
img_detail_close.setAttribute('src', './icons/icon_close.png');
img_detail_close.setAttribute('alt', 'close');
product_detail_close.appendChild(img_detail_close);

const img_product_detail = document.createElement('img');
img_product_detail.setAttribute('src', 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
img_product_detail.setAttribute('alt', 'bike');
product_detail.appendChild(img_product_detail);

const product_info = document.createElement('div');
product_info.classList.add('product-info');
product_detail.appendChild(product_info);

const price_product_info = document.createElement('p');	
price_product_info.innerText = '$120';
product_info.appendChild(price_product_info);

const title_product_info = document.createElement('p');
title_product_info.innerText = 'Bike';
product_info.appendChild(title_product_info);

const detail_product_info = document.createElement('p');
detail_product_info.innerText = 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.';
product_info.appendChild(detail_product_info);

const button_product_info = document.createElement('button');
button_product_info.innerText = 'Add to cart';
button_product_info.classList.add('primary-button');
button_product_info.classList.add('add-to-cart-button');
product_info.appendChild(button_product_info);

const img_button_product_info = document.createElement('img');
img_button_product_info.setAttribute('src', './icons/bt_add_to_cart.svg');
img_button_product_info.setAttribute('alt', 'add to cart');
button_product_info.appendChild(img_button_product_info);


const menuEmail = document.querySelector('.navbar-email');
const mobileIconMenu = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
const DesktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileIconMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    DesktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');
    
    if(!isAsideClosed){
        shoppingCartContainer.classList.add('inactive');
    }
    closeProductDetailAside();
    menuMobile.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMenuMobileClosed = menuMobile.classList.contains('inactive');
    const isDesktopMenuClosed = DesktopMenu.classList.contains('inactive');
    
    if(!isMenuMobileClosed){
        menuMobile.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }

    if(!isDesktopMenuClosed){
        DesktopMenu.classList.add('inactive');
    }
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside (idHeredado){
    DesktopMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    for (product of productList){
        if (idHeredado === product.name){
            img_product_detail.src = product.image;
            img_product_detail.alt = product.name;
            title_product_info.innerText = product.name;
            price_product_info.innerText = `$${product.price}`;
            detail_product_info.innerText = product.description;
        }
    }
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside (){
    productDetailContainer.classList.add('inactive');
}

function renderProducts(arr){
    for(product of arr){ //of recorre elemento a elemento de la lista
        //in recorre los indices
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('id', product.name);
        productImg.addEventListener('click',() => {
            openProductDetailAside(productImg.id);
        });


        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement('div');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

        productInfoFigure.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);