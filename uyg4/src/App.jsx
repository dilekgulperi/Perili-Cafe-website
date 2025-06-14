import React, { useEffect , useState} from "react";
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Anasayfa from "./pages/anasayfa";
import About from "../../uyg4/src/pages/About";
import MenuPage from "../../uyg4/src/pages/MenuPage";
import MenuCard from "./components/MenuCard";
import ProductDetail from "./pages/ProductDetail";
import Üyeol from "./pages/Üyeol" ;
import Info from "./pages/Info";
import Footer from "./pages/Footer";
import './App.css'
function App() {
  
  const[isLoggedIn,setIsLoggedIn] = useState(false);
  useEffect(()=> {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
   
  },[]);
  const handleLogout=()=> {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    
  };
  return(
    <BrowserRouter>
    <div className='App'>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <h1 >PERİLİ CAFEYE HOŞGELDİNİZ</h1>
       
<main>
  
    <Routes>
      <Route path="/" element={<Anasayfa/>} />
      <Route path='/menü' element={<MenuPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path='/about' element={<About />} />
      <Route path="/üyeol" element= {<Üyeol />} />
     <Route path="/giris" element={<Login onLogin={() => setIsLoggedIn(true)} />} />

    </Routes>
    </main>
    
    </div>
     
    <Info />
    <Footer />
    </BrowserRouter>


      



  );
}

export default App;
