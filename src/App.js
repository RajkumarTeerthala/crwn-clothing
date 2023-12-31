import { useEffect } from "react";
import {useDispatch}from 'react-redux'

import { onAuthStateChangedListener,
  createUserDocumentFromAuth }
   from "./utils/firebase/firebase.utils";
   

import { Routes,Route } from "react-router-dom";
import Home from "./components/home/home.component";
import Navigation from "./components/Navigationbar/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";
import { setCurrentUser } from "./store/user/user.action";



const App = () => {
const dispatch=useDispatch()

  useEffect(()=>{
    const unsubscribe= onAuthStateChangedListener((user)=>{
      createUserDocumentFromAuth(user);
    dispatch (setCurrentUser(user))
     
    })
    return unsubscribe;
    },[dispatch]);

  return (
    <Routes>
    <Route path="/" element={<Navigation/>}>
    <Route index element={<Home/>}/>
    <Route path="Shop/*" element={<Shop/>}/>
    <Route path="auth" element={<Authentication/>}/>
    <Route path="checkout" element={<CheckOut/>}/>
    </Route>
    </Routes>
  );
};

export default App;