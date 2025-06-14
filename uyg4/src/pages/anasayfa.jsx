import React from "react";
import { useNavigate, Link } from "react-router-dom";
import MenuCard from "../components/MenuCard";

const featuredProducts = [
  {id: "1",name: "Karamelli Latte",price: 60,image: "/images/latte.jpeg"},
  {id: "4",name: "Türk Kahvesi",price: 80,image: "/images/türkkahvesi.jpeg"},
  {id: "10", name: "Cold Brew",price: 85, image: "/images/coldbrew.jpeg"}
];

function Anasayfa() {
  const navigate = useNavigate();

  return (
    <section className="anasayfa">
      {/* Günün Öne Çıkanı */}
      <div className="content">
        <h1>⭐ GÜNÜN ÖNE ÇIKANI</h1>
        <h2>Fıstıklı San Sebastian & Karamel Macchiato</h2>
        <p>
          Bugün damağınızı şımartacak özel bir eşleşme önerimiz var!<br />
          Yoğun ve pürüzsüz dokusuyla ev yapımı <strong>Fıstıklı San Sebastian Cheesecake</strong>,<br />
          yanında taptaze kavrulmuş çekirdeklerden hazırlanan buzlu <strong>Karamel Macchiato</strong> ile buluşuyor.
        </p>
        <p><em>🕒 Sadece bugün – sınırlı sayıda!</em></p>
      </div>

      {/* %20 İndirim Kutusu */}
      <div className="signup-bonus-box">
        <h2>🎉 Sitemize Üye Olun, %20 Kazanın!</h2>
        <p>Hemen kaydolun ve ilk alışverişinizde %20 indirim fırsatını yakalayın.</p>
        <button onClick={() => navigate("/üyeol")} className="üye-ol">ÜYE OL</button>
        <p>Zaten üye misin?  </p>
        <button onClick={() => navigate("/giris")} className="usergiris">Giriş Yap</button>
      </div>

      {/* Öne Çıkan Ürünler */}
      <div className="featured-section">
        <h2>☕ Öne Çıkan Ürünler</h2>
        <div className="product-list">
          {featuredProducts.map((product) => (
            <MenuCard key={product.id} product={product} />
          ))}
        </div>
        <Link to="/menü" className="menu-button">Tüm Menüyü Gör</Link>
      </div>

      {/* Hakkımızda Özeti */}
      <div className="about-summary">
        <h2>🧡 Hakkımızda</h2>
        <p>
          2023 yılında kurulan kahve dükkanımız, üçüncü dalga kahve anlayışıyla sizlere nitelikli kahveler sunmayı amaçlıyor.
          Lezzetli içeceklerin yanında ev yapımı tatlılarımızla keyifli bir mola sizi bekliyor.
        </p>
        <Link to="/about" className="read-more">Hikayemizi Keşfedin →</Link>
      </div>
    </section>
  );
}

export default Anasayfa;

