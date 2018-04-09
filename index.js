var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price = Math.floor(Math.random() * 99) + 1;
 var newObj = cart.push(Object.assign({}, {itemName: item}, {itemPrice: price}))
 newObj;
 console.log(cart);
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var responsePart1 = 'In your cart, you have ';

  if (cart.length === 0){
    return 'Your shopping cart is empty.'
  }else if (cart.length === 1) {
    return responsePart1 + cart[0].itemName + 'at $' + cart[0].itemPrice; 
  }
    return responsePart1
  }


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
