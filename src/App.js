import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import Profile from './pages/Profile';
import RequireAuth from './pages/RequireAuth';
import { UserAuthProvider} from './contexts/UserContext';
import ViewAllWines from "./pages/ViewAllWines";
import ViewOneWine from "./pages/ViewOneWine"
import Products from "./pages/Products"
import ViewAllBeers from './pages/ViewAllBeers';
import ViewOneBeer from './pages/ViewOneBeer';
import Checkout from './pages/Checkout';

export default function App() {
    return (
      

            

        <UserAuthProvider>    
             
            <Router>
                <Navbar />
                <Routes>
                    
                    <Route path="/" element={<Home />} />
                     <Route path="/login" element={<LoginPage />} />   
                    <Route path="/about" element={<AboutPage />} />  
                    
                    
                    <Route path="/users">

                        <Route path=":id/home" element={<RequireAuth><Profile/></RequireAuth>}/>
                        <Route path=":id/checkout" element={<RequireAuth><Checkout/></RequireAuth>}/>
                    </Route>



                    
                    
                    <Route path="/products" element={<Products />}>
                            <Route path="wines" element={<ViewAllWines/>}/>
			                <Route path="wines/:id" element={<ViewOneWine/>}/>
                            <Route path="beers" element={<ViewAllBeers/>}/>
			                <Route path="beers/:id" element={<ViewOneBeer/>}/>
                    
                        
                        
		            </Route>



                </Routes>
            </Router>
           
        </UserAuthProvider>     

            
       
    );
}