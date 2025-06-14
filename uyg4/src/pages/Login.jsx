import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login({ onLogin }) {
    // güncelllenen verileri tutuyoruz 
    const[username, setUsername] = useState('');
      const[password, setPassword] = useState('');
        const[error, setError] = useState('');
        const navigate= useNavigate();
        // form kontrol aşaması
        const handleSubmit=(e)=> {
            e.preventDefault();
            if(username==='gülperi' && password==='1234') {
                localStorage.setItem('isLoggedIn','true');
                localStorage.setItem('username',username);
                setError('');
                onLogin();
                navigate('/') ;
            }
            else 
            {
                setError('Kullanıcı Adı veya şifre hatalıdır!!!') ;
            }
             
        };
        return(
            <div className="login-page">
                <h2>GİRİŞ FORMU</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Kullanıcı Adı</label><br />
                        <input type="text" id="username" value={username}
                        onChange={(e)=> setUsername(e.target.value)} required/> <br /><br />
                         <label htmlFor="password">Şifre</label><br />
                        <input type="password" id="password" value={password}
                        onChange={(e)=> setPassword(e.target.value)} required/> <br /><br />
                    </div>
                    <button type="submit">Giriş Yap</button><br /><br />
                      {error && <div className="error-message">{error}</div>}
                </form>

            </div>
        );
};
export default Login;     