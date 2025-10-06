import React from 'react';
import useCoustomHook from '../../../Houk/useCoustomHook';
import ProductDetails from './ProductDetails';

const Products = () => {
    const {products} = useCoustomHook()

    return (
        <div>
     
         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

             {
                products.map((Allcard => 
                 <ProductDetails    key={Allcard.id} Allcard={Allcard
                 } > </ProductDetails>
                ))
            }
        
        </div>   
        </div>
    );
};

export default Products;