document.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.getElementById('product-container');
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');
    const amountproducts = document.getElementById('total-quantity');
    let cart = [];
    let total = 0;
    let amountprods = 0;

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => {
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');

                const img = document.createElement('img');
                img.src = product.image;
                img.alt = product.title;

                const title = document.createElement('p');
                title.textContent = product.title;

                const price = document.createElement('p');
                price.textContent = `$${product.price}`;

                const addButton = document.createElement('button');
                addButton.textContent = 'Agregar al carrito';
                addButton.addEventListener('click', () => {
                    cart.push(product);
                    total += product.price;
                    amountprods ++;
                    updateCart();
                    alert('Producto agregado con éxito');
                });

                productCard.append(img,title, price, addButton);


                productContainer.append(productCard);
            });
        });

    function updateCart() {
        cartList.innerHTML = '';
        cart.forEach((product, index) => {
            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');

            const title = document.createElement('p');
            title.textContent = product.title;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Eliminar';
            removeButton.addEventListener('click', () => {
                cart.splice(index, 1);
                total -= product.price;
                amountprods --;
                updateCart();
                alert('Producto eliminado con éxito');
            });

            cartItem.appendChild(title);
            cartItem.appendChild(removeButton);
            cartList.appendChild(cartItem);
        });

        totalPrice.textContent = total.toFixed(4);
        amountproducts.textContent = amountprods;
    }
});
