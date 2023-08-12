import React  from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-items/cart.item.component';
import Button from '../button/button.component';
import { useNavigate } from 'react-router-dom';
import { CartDropdownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles';

const CartDropdown = () => {
  const {cartItems}=useContext(CartContext)
  const navigate=useNavigate()

const goToCheckOutHandler=()=>{
  navigate('/CheckOut')
}

return(
  <CartDropdownContainer>
    <CartItems >
    {
      cartItems.length ? (cartItems.map((item)=>(
        <CartItem key={item.id} cartItem={item}/>
        ))): (
          <EmptyMessage>your cart is empty</EmptyMessage>
        )
    }
    
    </CartItems>
    <Button onClick={goToCheckOutHandler}>GO CHECKOUT</Button>
  </CartDropdownContainer>
)
  
  
};

export default CartDropdown;