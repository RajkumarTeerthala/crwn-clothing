import {  Fragment } from "react";
import { useSelector } from "react-redux";

import Categorypreview from "../../components/category-preview/category-preview-component";
import { selectCategoriesMap,selectCategoriesIsLoading } from "../../store/categories/category.selector";
import Spinner from "../../components/spinner/spinner.components";
const CategoriesPreview=()=>{
   const isLoading=useSelector(selectCategoriesIsLoading)
   const categoriesMap=useSelector(selectCategoriesMap)
return(
   <Fragment>
   { isLoading?(
      <Spinner/>
   ):
      (Object.keys(categoriesMap).map((title)=>{
         const products= categoriesMap[title];
         return(
         <Categorypreview key={title} title={title} products={products}/>
         );
      }))
   } 
   </Fragment>
)
}
export default CategoriesPreview;