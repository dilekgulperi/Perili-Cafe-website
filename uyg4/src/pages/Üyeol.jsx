import React, { useEffect, useState } from "react";

function Üyeol() {
   //form bilgilerini tutuyoruz 
     const [formData , setFormData] =useState({
        isim: "",
        soyisim: "",
        şifre: ""
     });

     useEffect (() => {
      // form bilgilerini kaydediyoruz
        const savedData = localStorage.getItem("üyeform");
        if(savedData) {
            setFormData(JSON.parse(savedData));
        }
     },[]);
// form çalıştırma aşaması
     const handleChange = (e) => {
        const {id , value} = e.target;
        const updatedData = {...formData, [id]: value};
        setFormData(updatedData);
        localStorage.setItem("üyeform", JSON.stringify(updatedData));
     };
// form gönderme aşaması
     const handleSubmit = (e) => {
        e.preventDefault();// sayfanın kaybolmasını engeller
        if(!formData.isim || !formData.soyisim || !formData.şifre) {
          alert("Lütfen Boşlukları Doldurunuz!!!");
          return;
        };
alert('Hoşgeldiniz' + isim );
console.log("Form verileri gönderildi: ",formData);
localStorage.removeItem("üyeform");
setFormData({ isim: "", soyisim: "", şifre: ""});
     };



     return(
           <div className="Üye">
            <div className="form">
                <h2>ÜYELİK FORMU</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="isim" placeholder= "İSİM" value={formData.isim} onChange={handleChange}/><br /><br />
                    <input type="text" id="soyisim"placeholder="SOYİSİM" value={formData.soyisim} onChange={handleChange}/><br /><br />
                    <input type="password" id="şifre" placeholder="ŞİFRE" value={formData.şifre} onChange={handleChange}/><br /><br />
                    <button type="submit" className="gönder">GÖNDER</button>

                </form>

            </div>

           </div>
     );

}

export default Üyeol;