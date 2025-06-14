import React from "react";

function About () {
    return(
        <div className="about-page">
            <h1>Hakkımızda</h1>
            <p>2023 yılında kurulan kahve dükkanımız, üçüncü dalga kahve anlayışıyla kaliteli çekirdekleri özenle demleyerek sizlerle buluşturuyor.</p>

            <h2>Misyonumuz</h2>
            <p>Kahvenin bir içecekten fazlası olduğuna inanıyor, her yudumda bir deneyim sunmayı hedefliyoruz.</p>

            <h2>Ne Sunuyoruz?</h2>
            <ul className="hakkında">
                <li>Yöresel çekirdeklerden hazırlanan nitelikli kahveler</li>
                <li>Ev yapımı tatlılar</li>
                <li>Huzurlu ve sıcak bir atmosfer</li>
            </ul>

            <h2>Kurucudan Mesaj</h2>
            <p>“Kahveye olan tutkumuzla bu mekanı yarattık. Sadece içeceğiniz değil, hikayenizin bir parçası olsun.”</p>

            {/* Harita Bölümü */}
            <h2>Bizi Nerede Bulabilirsiniz?</h2>
            <p>Adres: Bereketzade Mah. Hacı Ali Sk. No:2 Kuledibi, Beyoğlu, İstanbul</p>
            <p>Saatler: 09.00 - 23.00</p>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.628978026189!2d28.97435841545509!3d41.02547877929856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a1a2b2b8a3%3A0x3b2a8b8b8b8b8b8b!2sGalata%20Konak%20Cafe!5e0!3m2!1str!2str!4v1627559680135!5m2!1str!2str"
                    width="100%"
                    height="400"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Perili Cafe Konumu"
                ></iframe>
            </div>
        </div>
    );
}

export default About;
