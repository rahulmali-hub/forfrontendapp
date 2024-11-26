
import './App.css';
import ResponsiveDrawer from './components/home/Home';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Product from './components/categary/Categary';
import Subcategary from './components/subcategary/Subcategary';
import Products from './components/products/Products';
import Users from './components/Userscomponent/Users';
import Register from './components/register_login/Register';

function App() {
  return (
    <>
    <BrowserRouter >
    <Routes >
      <Route path='/' element={<Register/>}/>
      <Route path='/home' element ={<ResponsiveDrawer/>}>
      <Route path='categary' element={<Product/>}/>
      <Route path='subcategary' element={<Subcategary/>}/>
      <Route path='products' element={<Products/>}/>
      <Route path='users' element={<Users/>}/>
      </Route>
      
    </Routes>
    </BrowserRouter>
   
     {/* <ResponsiveDrawer/> */}
     
 </>
  );
}

export default App;
