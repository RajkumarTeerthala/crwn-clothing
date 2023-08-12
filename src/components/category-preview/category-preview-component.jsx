import { Link } from 'react-router-dom';

import './category-preview.styles.scss';
import ProductCard from '../products/product.card.component';
const Categorypreview=({title,products})=>{
    return(
           <div className='category-previw-container'>
           <h2>
           <Link className='title' to={title}>{title.toUpperCase()}</Link>
           </h2>
           <div className='preview'>
           {
           products.filter((_,index)=>index < 4)
           .map((product)=>
           <ProductCard key={product.id} product={product}/>
           )
           }
           </div>
           </div>
    )
}
export default Categorypreview