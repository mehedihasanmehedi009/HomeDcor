import React from 'react';

const ProductDetails = ({Allcard}) => {
    const {image,description,name,category
,material
,price,stock

} =Allcard
    return (
        <div>
             <div className="card bg-base-100 shadow-sm ">
  <figure className="h-48 overflow-hidden">
    <img className='w-full object-cover hover:scale-120 transition ease-in-out'
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {name}
    </h2>
    <p> {description}</p>
    <p>price:${price}</p>
    <p>Material:{material}</p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProductDetails;