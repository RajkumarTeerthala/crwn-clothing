import { useContext } from "react"

import { ShopingIcon,CratIconContainer,ItemCount } from "./cart.icon.styles"

import { CartContext } from "../../contexts/cart.context"

const CartIcon=()=>{
    const {isCartOpen,setIsCartOpen,cartItemCount}=useContext(CartContext)
   
   
   const toggleIsCartOpen=()=>setIsCartOpen(!isCartOpen)
   
   
    return(
<CratIconContainer onClick={toggleIsCartOpen}>
<ShopingIcon className='shopping-icon'/>
<ItemCount as='span'>{cartItemCount}</ItemCount>

</CratIconContainer>
    )
}
export default CartIcon