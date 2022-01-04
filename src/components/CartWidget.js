import ShoppingCart from '../shopping-cart.png';
import Cart from './Cart';
function CartWidget (){
    const showShoppingCart=()=>{
        return <Cart></Cart>;
    }
    return (
        <div onClick={showShoppingCart}>
            <img src={ShoppingCart} alt="imagen de carrito" width="25"
        height="25"
        />
        <div className="header-cart-count">1</div>
        </div>
        
    );
}

export default CartWidget;