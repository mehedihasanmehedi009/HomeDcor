import React, { useState } from 'react';
import useCoustomHook from '../../../Houk/useCoustomHook';
import ProductDetails from './ProductDetails';
import SkeletonLoader from '../../../LoadingSpiner';

const Products = () => {
    const {products,loading} = useCoustomHook()
     const [serch, setSerch]=useState('')

     const term = serch.trim().toLocaleLowerCase()
     const serchProduct = term? products.filter(product =>product.name.toLocaleLowerCase().includes(term)):products
    //   console.log(serchProduct)
    return (
        
        <div>
             <div className="flex justify-between mb-4">
            <h1 className="text-3xl font-bold">ALL Product <span className='text-sm text-gray-400'>({serchProduct.length})Products Found </span></h1>

           <label className="input">
              <input
               value={serch}
              onChange={(e)=>setSerch(e.target.value)} type="search" placeholder="search Products" />
           </label>         
          </div>
          {
            loading?(<SkeletonLoader count="16"/>):(
                     <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                
             {
               serchProduct .map((Allcard => 
                 <ProductDetails    key={Allcard.id} Allcard={Allcard
                 } > </ProductDetails>
                ))
            }
        
        </div> 
            )
          }
      
        </div>
    );
};

export default Products;