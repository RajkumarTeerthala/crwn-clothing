import { useState,useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { selectCategoriesMap,selectCategoriesIsLoading } from '../../store/categories/category.selector'
import Spinner from '../../components/spinner/spinner.components'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/products/product.card.component'
import './category.styles.scss'


const Category=()=>{
    const {category}=useParams()
    const categoriesMap=useSelector(selectCategoriesMap)
    const isLoading=useSelector(selectCategoriesIsLoading)
    const [products,setProducts]=useState(categoriesMap[category])

    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[category,categoriesMap])
    return(
        <Fragment>
        <h2 className='category-title'>{category.toLocaleUpperCase()}</h2>
      {
        isLoading ?(
            <Spinner/>
        ):(
            <div className='category-container'>
            {products &&
             products.map((product)=>(
                 <ProductCard key={product.id} product={product}/>
                 ))}
          </div>
        ) }
       
     </Fragment>

    )}
export default Category