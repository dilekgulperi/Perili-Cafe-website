import React from "react";
import { Link } from "react-router-dom";

function Header( {isLoggedIn, onLogout }) {
  return (
    <header className="Header">
      <nav className="navbar">
        <div className="logo">☕ PéRiLi CaFé</div>
        <ul className="menu">
          <li className="nav-item-active"><Link to="/">Anasayfa</Link></li>
          <li className="nav-item"><Link to="/menü">Menü</Link></li>
          <li className="nav-item"><Link to="/about">Hakkımızda</Link></li>
          <li className="nav-item"><Link to="/üyeol">Üye Ol</Link></li>
          
          {isLoggedIn ? (
            <li >
              <span>Merhaba, {localStorage.getItem('username')}</span>
              <button onClick={onLogout} >Çıkış</button>
            </li>
                ) : (
            <li className="nav-item"><Link to="/giris">Giriş Yap</Link></li>
        )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
