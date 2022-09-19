const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const quantityPara = document.querySelector('#quantity');

const empty = document.querySelector('#empty');

const cartBtn = document.querySelector('#cart');
const cart = document.querySelector('.cart');

const totalCart = document.querySelector('#total-cart');
const addToCart = document.querySelector('#add');

const success = document.querySelector('.success');
const okBtn = document.querySelector('#ok');


let quantity;

cartBtn.addEventListener('click', () => {
    if(cart.style.display === 'block') {
        cart.style.display = 'none';
    } else {
        cart.style.display = 'block';
    }
})

minus.addEventListener('click', () => {
    quantity = parseInt(quantityPara.textContent);
    if (quantity !== 0) {
        quantity--;
    } else {
        quantity = 0;
    }

    quantityPara.textContent = quantity;
})

plus.addEventListener('click', () => {
    quantity = parseInt(quantityPara.textContent);
    quantity++;
    quantityPara.textContent = quantity;
    console.log(quantity)
})


add.addEventListener('click', () => {
    
    if (quantity > 0) {

        const filledCart = document.querySelector('#filled-cart');
    const price = document.querySelector('#sale-price');
    const productPic = document.querySelector('#productPic');
    const productName = document.querySelector('#product');
    
    const product = document.createElement('div');
    const productId = document.createElement('p');
    const pic = document.createElement('img');
    const amount = document.createElement('p');
    const total = document.createElement('span');
    const info = document.createElement('div');
    const rmvBtn = document.createElement('button');

    const chckOutBtn = document.querySelector('#checkout');

    let priceStr = price.textContent.split(' ');
    let priceFlt;

    priceStr = priceStr[0];

    priceFlt = parseFloat(priceStr.replace('$', ''));

    pic.setAttribute('src', productPic.src);
    product.setAttribute('class', 'item');
    productId.textContent = productName.textContent;
    productId.setAttribute('id', 'productId');
    rmvBtn.setAttribute('id', 'remove');

    amount.setAttribute('id', 'amount');
    amount.textContent = `${priceStr} x ${quantity} `;

    total.setAttribute('id', 'total');
    total.textContent = `$${priceFlt*quantity}`;
    amount.appendChild(total);

    product.appendChild(pic);
    info.appendChild(productId);
    info.appendChild(amount);
    product.appendChild(info);
    product.appendChild(rmvBtn);

    filledCart.insertBefore(product, chckOutBtn);

    rmvBtn.addEventListener('click', () => {
        rmvBtn.parentNode.remove();
        const items = document.querySelectorAll('.item');
        if (items.length === 0) {
            filledCart.style.display = 'none';
            empty.style.display = 'block';
            totalCart.textContent = 0;
        }
    });

    empty.style.display = 'none';
    filledCart.style.display = 'block';

    totalCart.textContent = quantity;

    success.style.display = 'flex';
    } else {
        alert('Nothing add to cart!');
    }

})

okBtn.addEventListener('click', () => success.style.display = 'none');
