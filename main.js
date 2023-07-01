const body = document.querySelector('body');

const productList = [];
productList.push({
    name: 'Bike',
    price: 219,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    description : 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
});
productList.push({
    name: 'Computer monitor',
    price: 165,
    image: 'https://images.pexels.com/photos/331788/pexels-photo-331788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'This screen is perfect for your home office, it has a 4k resolution and a 32-inch screen.'
});
productList.push({
    name: 'Computer',
    price: 1014,
    image: 'https://media.istockphoto.com/id/1314343964/es/foto/unidad-de-sistema-de-gama-alta-para-el-primer-plano-de-la-computadora-de-juego.jpg?s=2048x2048&w=is&k=20&c=4ZfOgrUzagfHV0jGwuxoA_3IPZldmI9eqG3aBX-P0_Q=',
    description: 'Powerful gaming CPU designed for optimal performance, delivering immersive gameplay and smooth multitasking.'
});

//navigation bar structure
const navbar = document.createElement('nav');
body.insertBefore(navbar, body.children[0]);

const navbar_icon_menu = document.createElement('img');
navbar_icon_menu.setAttribute('src', './icons/icon_menu.svg');
navbar_icon_menu.setAttribute('alt', 'menu');
navbar_icon_menu.classList.add('menu');
navbar.appendChild(navbar_icon_menu);

const navbar_left = document.createElement('div');
navbar_left.classList.add('navbar-left');
navbar.appendChild(navbar_left);

const navbar_logo = document.createElement('img');
navbar_logo.setAttribute('src', './logos/logo_yard_sale.svg');
navbar_logo.setAttribute('alt', 'logo');
navbar_logo.classList.add('logo');
navbar_left.appendChild(navbar_logo);

const list_navbar_left = document.createElement('ul');
navbar_left.appendChild(list_navbar_left);

const li_all_navbar_left = document.createElement('li');
list_navbar_left.appendChild(li_all_navbar_left);
const a_all_navbar_left = document.createElement('a');
a_all_navbar_left.setAttribute('href', '#');
a_all_navbar_left.innerText = 'All';
li_all_navbar_left.appendChild(a_all_navbar_left);

const li_clothes_navbar_left = document.createElement('li');
list_navbar_left.appendChild(li_clothes_navbar_left);
const a_clothes_navbar_left = document.createElement('a');
a_clothes_navbar_left.setAttribute('href', '#');
a_clothes_navbar_left.innerText = 'Clothes';
li_clothes_navbar_left.appendChild(a_clothes_navbar_left);

const li_electronics_navbar_left = document.createElement('li');
list_navbar_left.appendChild(li_electronics_navbar_left);
const a_electronics_navbar_left = document.createElement('a');
a_electronics_navbar_left.setAttribute('href', '#');
a_electronics_navbar_left.innerText = 'Electronics';
li_electronics_navbar_left.appendChild(a_electronics_navbar_left);

const li_furnitures_navbar_left = document.createElement('li');
list_navbar_left.appendChild(li_furnitures_navbar_left);
const a_furnitures_navbar_left = document.createElement('a');
a_furnitures_navbar_left.setAttribute('href', '#');
a_furnitures_navbar_left.innerText = 'Furnitures';
li_furnitures_navbar_left.appendChild(a_furnitures_navbar_left);

const li_toys_navbar_left = document.createElement('li');
list_navbar_left.appendChild(li_toys_navbar_left);
const a_toys_navbar_left = document.createElement('a');
a_toys_navbar_left.setAttribute('href', '#');
a_toys_navbar_left.innerText = 'Toys';
li_toys_navbar_left.appendChild(a_toys_navbar_left);

const li_others_navbar_left = document.createElement('li');
list_navbar_left.appendChild(li_others_navbar_left);
const a_others_navbar_left = document.createElement('a');
a_others_navbar_left.setAttribute('href', '#');
a_others_navbar_left.innerText = 'Others';
li_others_navbar_left.appendChild(a_others_navbar_left);

const navbar_right = document.createElement('div');
navbar_right.classList.add('navbar-right');
navbar.appendChild(navbar_right);

const ul_navbar_right = document.createElement('ul');
navbar_right.appendChild(ul_navbar_right);

const li_navbar_email = document.createElement('li');
li_navbar_email.classList.add('navbar-email');
li_navbar_email.innerText = 'platzi@example.com';
ul_navbar_right.appendChild(li_navbar_email);

const li_navbar_shopping_cart = document.createElement('li');
li_navbar_shopping_cart.classList.add('navbar-shopping-cart');
ul_navbar_right.appendChild(li_navbar_shopping_cart);

const img_navbar_shopping_cart = document.createElement('img');
img_navbar_shopping_cart.setAttribute('src', './icons/icon_shopping_cart.svg');
img_navbar_shopping_cart.setAttribute('alt', 'shopping cart');
li_navbar_shopping_cart.appendChild(img_navbar_shopping_cart);

const counter_cart = document.createElement('div');
counter_cart.setAttribute('id', 'counterCart');
counter_cart.classList.add('counter-cart');
counter_cart.innerText = '0'; //contador
li_navbar_shopping_cart.appendChild(counter_cart);

const desktop_menu = document.createElement('div');
desktop_menu.classList.add('desktop-menu');
desktop_menu.classList.add('inactive');
navbar.appendChild(desktop_menu);

const ul_desktop_menu = document.createElement('ul');
desktop_menu.appendChild(ul_desktop_menu);

const li_title_desktop_menu = document.createElement('li');
ul_desktop_menu.appendChild(li_title_desktop_menu);

const a_title_desktop_menu = document.createElement('a');
a_title_desktop_menu.setAttribute('href', '#');
a_title_desktop_menu.classList.add('title');
a_title_desktop_menu.innerText = 'My orders';
li_title_desktop_menu.appendChild(a_title_desktop_menu);

const li_account_desktop_menu = document.createElement('li');
ul_desktop_menu.appendChild(li_account_desktop_menu);

const a_account_desktop_menu = document.createElement('a');
a_account_desktop_menu.setAttribute('href', '#');
a_account_desktop_menu.innerText = 'My account';
li_account_desktop_menu.appendChild(a_account_desktop_menu);

const li_sign_out_desktop_menu = document.createElement('li');
ul_desktop_menu.appendChild(li_sign_out_desktop_menu);

const a_sign_out_desktop_menu = document.createElement('a');
a_sign_out_desktop_menu.setAttribute('href', '#');
a_sign_out_desktop_menu.innerText = 'Sign out';
li_sign_out_desktop_menu.appendChild(a_sign_out_desktop_menu);

const mobile_menu = document.createElement('div');
mobile_menu.classList.add('mobile-menu');
mobile_menu.classList.add('inactive');
navbar.appendChild(mobile_menu);

const ul1_mobile_menu = document.createElement('ul');
mobile_menu.appendChild(ul1_mobile_menu);

const li_categories_mobile_menu = document.createElement('li');
ul1_mobile_menu.appendChild(li_categories_mobile_menu);

const a_categories_mobile_menu = document.createElement('a');
a_categories_mobile_menu.setAttribute('href', '#');
a_categories_mobile_menu.innerText = 'Categories';
li_categories_mobile_menu.appendChild(a_categories_mobile_menu);

const li_all_mobile_menu = document.createElement('li');
ul1_mobile_menu.appendChild(li_all_mobile_menu);

const a_all_mobile_menu = document.createElement('a');
a_all_mobile_menu.setAttribute('href', '#');
a_all_mobile_menu.innerText = 'All';
li_all_mobile_menu.appendChild(a_all_mobile_menu);

const li_clothes_mobile_menu = document.createElement('li');
ul1_mobile_menu.appendChild(li_clothes_mobile_menu);

const a_clothes_mobile_menu = document.createElement('a');
a_clothes_mobile_menu.setAttribute('href', '#');
a_clothes_mobile_menu.innerText = 'Clothes';
li_clothes_mobile_menu.appendChild(a_clothes_mobile_menu);

const li_electronics_mobile_menu = document.createElement('li');
ul1_mobile_menu.appendChild(li_electronics_mobile_menu);

const a_electronics_mobile_menu = document.createElement('a');
a_electronics_mobile_menu.setAttribute('href', '#');
a_electronics_mobile_menu.innerText = 'Electronics';
li_electronics_mobile_menu.appendChild(a_electronics_mobile_menu);

const li_furnitures_mobile_menu = document.createElement('li');
ul1_mobile_menu.appendChild(li_furnitures_mobile_menu);

const a_furnitures_mobile_menu = document.createElement('a');
a_furnitures_mobile_menu.setAttribute('href', '#');
a_furnitures_mobile_menu.innerText = 'Furnitures';
li_furnitures_mobile_menu.appendChild(a_furnitures_mobile_menu);

const li_toys_mobile_menu = document.createElement('li');
ul1_mobile_menu.appendChild(li_toys_mobile_menu);

const a_toys_mobile_menu = document.createElement('a');
a_toys_mobile_menu.setAttribute('href', '#');
a_toys_mobile_menu.innerText = 'Toys';
li_toys_mobile_menu.appendChild(a_toys_mobile_menu);

const li_others_mobile_menu = document.createElement('li');
ul1_mobile_menu.appendChild(li_others_mobile_menu);

const a_others_mobile_menu = document.createElement('a');
a_others_mobile_menu.setAttribute('href', '#');
a_others_mobile_menu.innerText = 'Others';
li_others_mobile_menu.appendChild(a_others_mobile_menu);

const ul2_mobile_menu = document.createElement('ul');
mobile_menu.appendChild(ul2_mobile_menu);

const li_orders_mobile_menu = document.createElement('li');
ul2_mobile_menu.appendChild(li_orders_mobile_menu);

const a_orders_mobile_menu = document.createElement('a');
a_orders_mobile_menu.setAttribute('href', '#');
a_orders_mobile_menu.innerText = 'My orders';
li_orders_mobile_menu.appendChild(a_orders_mobile_menu);

const li_account_mobile_menu = document.createElement('li');
ul2_mobile_menu.appendChild(li_account_mobile_menu);

const a_account_mobile_menu = document.createElement('a');
a_account_mobile_menu.setAttribute('href', '#');
a_account_mobile_menu.innerText = 'My account';
li_account_mobile_menu.appendChild(a_account_mobile_menu);

const ul3_mobile_menu = document.createElement('ul');
mobile_menu.appendChild(ul3_mobile_menu);

const li_email_mobile_menu = document.createElement('li');
ul3_mobile_menu.appendChild(li_email_mobile_menu);

const a_email_mobile_menu = document.createElement('a');
a_email_mobile_menu.setAttribute('href', '#');
a_email_mobile_menu.classList.add('email');
a_email_mobile_menu.innerText = 'platzi@example.com';
li_email_mobile_menu.appendChild(a_email_mobile_menu);

const li_sign_out_mobile_menu = document.createElement('li');
ul3_mobile_menu.appendChild(li_sign_out_mobile_menu);

const a_sign_out_mobile_menu = document.createElement('a');
a_sign_out_mobile_menu.setAttribute('href', '#');
a_sign_out_mobile_menu.classList.add('sign-out');
a_sign_out_mobile_menu.innerText = 'Sign out';
li_sign_out_mobile_menu.appendChild(a_sign_out_mobile_menu);

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