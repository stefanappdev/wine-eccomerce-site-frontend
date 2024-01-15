import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';

import RequireAuth from './pages/RequireAuth';
import { UserAuthProvider} from './contexts/UserContext';
import ViewAllWines from "./pages/ViewAllWines";
import ViewOneWine from "./pages/ViewOneWine"
import Products from "./pages/Products"
import ViewAllBeers from './pages/ViewAllBeers';
import ViewOneBeer from './pages/ViewOneBeer';
import Checkout from './pages/Checkout';
import { CartContextProvider } from './contexts/CartContext';
import Logout from './pages/Logout';
import Signup from './pages/Signup';

export default function App() {
    return (
      

    <UserAuthProvider>        
        <CartContextProvider>
          
                
                <Router>
                 <div>
                     <Navbar />
                  </div>   
                 
                    <Routes>
                          
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<LoginPage />} />  
                        <Route path="/signup" element={<Signup />} /> 
                        <Route path="/about" element={<AboutPage />} />  
                        
                        
                        <Route path="/users">

                            
                            <Route path=":id/checkout" element={<RequireAuth><Checkout/></RequireAuth>}/>
                        </Route>



                        
                        
                        <Route path="/products" element={<Products />}>
                                <Route path="wines" element={<ViewAllWines/>}/>
                                <Route path="wines/:id" element={<ViewOneWine/>}/>
                                <Route path="beers" element={<ViewAllBeers/>}/>
                                <Route path="beers/:id" element={<ViewOneBeer/>}/>
                        
                            
                            
                        </Route>

                        <Route path="/logout" element={<Logout />} />



                    </Routes>
                </Router>
            
        </CartContextProvider>    
    </UserAuthProvider>      

            
       
    );
}