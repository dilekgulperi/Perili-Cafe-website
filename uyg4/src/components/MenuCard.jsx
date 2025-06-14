
import { Link } from "react-router-dom";
 function MenuCard( {product} ) {
      return(
           <Link to={`/product/${product.id}`} className="card">

               <div>
                    <img src={product.image} alt={product.name} />
                    <h2>{product.name}</h2>
                    <p>{product.price} ₺ </p>
                    </div>
                  </Link>
            
      );
 }
 export default MenuCard;