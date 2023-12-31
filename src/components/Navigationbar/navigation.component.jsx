import { Fragment } from 'react';
import { Outlet,  } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import CartIcon from '../cart-icons/cart.icon.component';
import CartDropdown from '../cart-dropdown/cart.dropdown.component';

import {selectCartIsOpen} from '../../store/cart/cart.selector'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { NavigationContainer,LogoContainer,NavLinksContainer,NavLink } from './navigation.styles';

const Navigation = () => {

  const currentUser= useSelector(selectCurrentUser)
  const isCartOpen=useSelector(selectCartIsOpen)

  

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>
            SHOP
          </NavLink>

          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              SIGN IN
            </NavLink>
          )}
          <CartIcon/>
        </NavLinksContainer>
       { isCartOpen &&<CartDropdown/>}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;