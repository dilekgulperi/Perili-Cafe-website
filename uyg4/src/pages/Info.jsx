import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
function Info() {
 return(
 <div className="info">
        <h2>İLETİŞİM BİLGİLERİMİZ</h2>
        <div className="flex items-center space-x-2">
          <FaPhoneAlt className="text-blue-600" />
          <span>+90 546 333 45 66</span>
        </div><br />
        <div className="flex items-center space-x-2">
          <FaEnvelope className="text-red-600" />
          <span>info@perilicafé.com</span>
        </div><br />
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-green-600" />
          <span> Bereketzade Mah. Hacı Ali Sk. No:2 Kuledibi, Beyoğlu, İstanbul</span>
        </div>
      </div>
 );
};
export default Info;