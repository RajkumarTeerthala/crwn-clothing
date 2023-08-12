import './checkout.styles.scss'
import { useContext } from 'react'
import { CartContext} from '../../contexts/cart.context'
import CheckoutItem from '../../components/checkout-items/checkout-item.component'


const CheckOut=()=>{
    const {cartItems,cartTotal}=useContext(CartContext)
    return(
<div className='checkout-container'>
<div className='checkout-header'>
<div className='header-block'>
<span>product</span>
</div>

<div className='header-block'>
<span>Description</span>
</div>

<div className='header-block'>
<span>qualtity</span>
</div>

<div className='header-block'>
<span>price</span>
</div>

<div className='header-block'>
<span>Remove</span>
</div>
</div>

{ cartItems.map((CartItem)=>(
 <CheckoutItem key={CartItem.id} CartItem={CartItem}/>
  ))}
<span className='Total'>Total: Rs{cartTotal}</span>
</div>
 )
}
export default CheckOut