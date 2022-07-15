import './CartWidget.css'
import { useContext } from 'react';
import CartContext from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)


    return(
        <div className="CartWidget">
            <Link to='/cart'><p>Carrito=</p></Link>
            
            { totalQuantity }
        </div>
    );
}

export default CartWidget