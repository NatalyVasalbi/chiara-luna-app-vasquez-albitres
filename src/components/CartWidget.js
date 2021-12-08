import ShoppingCart from '../shopping-cart.png';
function CartWidget (){
    return (
        <div>
            <img src={ShoppingCart} alt="imagen de carrito" width="25"
        height="25"
        />
        <div className="header-cart-count">1</div>
        </div>
        
    );
}

export default CartWidget;