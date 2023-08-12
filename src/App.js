import { Routes,Route } from "react-router-dom";
import Home from "./components/home/home.component";
import Navigation from "./components/Navigationbar/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";
const App = () => {
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