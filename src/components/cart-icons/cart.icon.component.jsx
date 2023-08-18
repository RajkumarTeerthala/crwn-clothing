import { useDispatch,useSelector } from "react-redux"
import { selectCartCount,selectCartIsOpen } from "../../store/cart/cart.selector"
import {setIsCartOpen}from '../../store/cart/cart.action'


import { ShopingIcon,CratIconContainer,ItemCount } from "./cart.icon.styles"


const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectCartIsOpen);
    const cartCount = useSelector(selectCartCount);
  
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  
    return (
      <CratIconContainer onClick={toggleIsCartOpen}>
        <ShopingIcon className='shopping-icon' />
        <ItemCount>{cartCount}</ItemCount>
      </CratIconContainer>
    );
  };
  
  export default CartIcon;