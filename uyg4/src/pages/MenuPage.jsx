import React from "react";
import MenuCard from "../components/MenuCard";
const products =[
    //sıcak içecekler
    
  {id: "1", name: "Karamelli Latte", price: 60, image: "/images/latte.jpeg", description: "Karamel şurubu ve yoğun sütle harmanlanmış kremalı bir latte."},
  {id: "2", name: "Espresso", price: 45, image: "/images/espresso.jpeg", description: "Yoğun ve zengin aromalı kısa bir kahve, sade olarak servis edilir."},
  {id: "3", name: "Mocha", price: 55, image: "/images/mocha.jpeg", description: "Çikolata ve espresso karışımının, sütle birleşerek oluşturduğu tatlı bir içecek."},
  {id: "4", name: "Türk Kahvesi", price: 80, image: "/images/türkkahvesi.jpeg", description: "Geleneksel Türk kahvesi, yoğun ve kıvamlı bir içim deneyimi sunar."},
  {id: "5", name: "Cappuccino", price: 85, image: "/images/cap.jpeg", description: "Sıcak süt ve kremamsı süt köpüğüyle hazırlanan, yumuşak içimli klasik bir kahve."},
  
  // Soğuk İçecekler
  {id: "6", name: "Iced Macchiato", price: 70, image: "/images/iced m.jpeg", description: "Soğuk süt ve espresso katmanlarının birleşimi, buzla serinletilmiş bir içecek."},
  {id: "7", name: "Iced Latte", price: 80, image: "/images/iced latte.jpeg", description: "Soğuk süt ve espresso karışımının buzla serinletildiği ferahlatıcı bir içecek."},
  {id: "8", name: "Iced Mocha", price: 85, image: "/images/iced mocha.jpeg", description: "Soğuk çikolata ve espresso karışımı, süt ve buzla birleşerek serinletici bir içim sunar."},
  {id: "9", name: "Iced Flat White", price: 80, image: "/images/icedf.jpeg", description: "Yumuşak ve kremsi sütle hazırlanan, soğuk ve hafif yoğun bir içecek."},
  {id: "10", name: "Cold Brew", price: 85, image: "/images/coldbrew.jpeg", description: "Soğuk suyla uzun süre demlemiş, düşük asiditeli ve güçlü bir kahve."},
  
  // Tatlılar
  {id: "11", name: "Kurabiye", price: 70, image: "/images/kurabiye.jpeg", description: "Ev yapımı, çıtır çıtır, taze pişirilmiş klasik bir kurabiye."},
  {id: "12", name: "Çikolatalı Kek", price: 80, image: "/images/çikolatalıkek.jpeg", description: "Yoğun çikolata lezzetiyle zenginleştirilmiş, nemli ve yumuşak bir kek."},
  {id: "13", name: "Havuçlu Kek", price: 85, image: "/images/havuçlu.jpeg", description: "Baharatlı ve nemli bir kek, üzerine kremalı peynirli icing ile."},
  {id: "14", name: "Brownie", price: 80, image: "/images/brownie.jpeg", description: "Yoğun çikolata tadı ve yumuşak dokusu ile klasik bir brownie."},
  {id: "15", name: "San Sebastian", price: 85, image: "/images/sans.jpeg", description: "Bask bölgesinin ünlü cheesecake tarifi, karamelleşmiş üst yüzeyiyle dikkat çeker."}
];




function MenuPage() {
    return(
        <div className="container">
            {products.map(product => (
                <MenuCard key={product.id} product={product}/>
            ))}

        </div>

    );
}
export default MenuPage;