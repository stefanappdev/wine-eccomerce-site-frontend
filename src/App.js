import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import Profile from './pages/Profile';
import RequireAuth from './pages/RequireAuth';
import { UserAuthProvider} from './contexts/UserContext';

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
                        
                    
                    
                    </Route>

                </Routes>
            </Router>
           
        </UserAuthProvider>     

            
       
    );
}