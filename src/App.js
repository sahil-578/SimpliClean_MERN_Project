import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import About from  './Pages/About';
import Contact from './Pages/Contact';
import Product from  './Pages/Product';
import Cart  from "./Pages/Cart";
import LoginSignup  from "./Pages/LoginSignup"
import Footer from './Components/Footer/Footer';
import broom_banner from './Components/Assets/banner-broom.png';
import wiper_banner from './Components/Assets/banner-wiper.png';
import scrubber_banner from './Components/Assets/banner-scrubber.png';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/brooms' element={<ShopCategory category='broom' banner={broom_banner}/>} />
        <Route path= '/wipers' element={<ShopCategory category= 'wiper' banner={wiper_banner}/>} />
        <Route path= '/scrubbers' element={<ShopCategory category= 'scrubber' banner={scrubber_banner}/>} />        
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
