let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Boerewors Roll with chips',
        tag: 'sausage',
        price: 30,
        inCart: 0
    },
    {
        name: 'Beef burger with chips',
        tag: 'burger',
        price: 45,
        inCart: 0
    },
    {
        name: 'Toasted Cheese and Tomato',
        tag: 'sandwich',
        price: 23,
        inCart: 0
    },
    {
        name: 'Vienna Gatsby',
        tag: 'gatsby',
        price: 55,
        inCart: 0
    },
    {
        name: 'Large Chicken Pizza',
        tag: 'pizza',
        price: 60,
        inCart: 0
    },
    {
        name: 'Chicken Wrap with Chips',
        tag: 'wrap',
        price: 40,
        inCart: 0
    }
      
];

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
    
}



function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    
    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 4);
        document.querySelector('.cart span').textContent =  productNumbers + 4;
    } else {
        localStorage.setItem('cartNumbers', 4);
        document.querySelector('.cart span').textContent = 4; 
    }
    
  setItems(product);
    
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 4; 
    } else {
    product.inCart = 4;
    cartItems = {
    [product.tag]: product 
        }

    }
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems)); 
    
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    
    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost);
    
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
    
    
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    
    
    console.log(cartItems);
    if(cartItems && productContainer){
            productContainer.innerHTML = '';
            Object.values(cartItems).map(item => {
                productContainer.innerHTML += `
                <div class="product">
                    <ion-icon name="close-outline"></ion-icon>
                    <img src="./images/${item.tag}.jpg">
                    <span>${item.name}</span>
                </div>
                <div class = "price">${item.price}</div>
                <div class = "quantity">
                    <ion-icon name="caret-back-outline"></ion-icon>
                    <span>${item.inCart}</span>
                    <ion-icon name="caret-forward-outline"></ion-icon>
                </div>
                <div class="total">
                    ${item.inCart*item.price},00
                </div>
    `;
            });
        
        productContainer.innerHTML += `                                         
            <div class="basketTotalContainer">  
            <h4 class="basketTotalTitle">   
                Basket Total 
            </h4>
    <h4 class="basketTotal">    
    R${cartCost},00
            </h4>
    `;
            
        }
    
            
    }

 

    


onLoadCartNumbers();
displayCart();


