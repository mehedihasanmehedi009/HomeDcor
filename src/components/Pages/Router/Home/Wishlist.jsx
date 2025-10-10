 import React, { useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Localestorege } from '../../../Houk/Localestoreg';
const Wishlist = () => {
  const [wishlist, setWishlist] = useState(()=>Localestorege());
  const [sortOrder, setSortOrder] = useState("none");

 

  if(!wishlist.length) return<p> No Data abale</p>

  const sortedItem = () => {
    if (sortOrder === "price-acd") {
      return [...wishlist].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-dac") {
      return [...wishlist].sort((a, b) => b.price - a.price);
    } else {
      return wishlist;
    }
  };
  const  handelRemove = id =>{
  const ExistingList = JSON.parse(localStorage.getItem("Wishlist"));
    let updatadList = ExistingList.filter(p=>p.id !==id)
    setWishlist(updatadList)
  localStorage.setItem("Wishlist",JSON.stringify( updatadList))
  alert("ok")
  }
      // cart chat
  const  totaleCategry = {}
  wishlist.forEach(product =>{
    const category= product.category
    totaleCategry[category] = (totaleCategry[category] || 0) +product.price
  })
 const  cartChart = Object.keys(totaleCategry).map(category=>({
  category,
  Total:totaleCategry[category]
 }))
  return (
    <>
      <div className="space-y-6">
        <div className="flex justify-between mb-4">
          <h1 className="text-3xl font-bold">
            Wishlist <span className='text-sm text-gray-400'>({sortedItem().length}) Products Found</span>
          </h1>

          <label className='form-control w-full max-w-xs'>
            <select
              className='select select-bordered'
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value)}
            >
              <option value="none">Sort by price</option>
              <option value="price-acd">Low → High</option>
              <option value="price-dac">High → Low</option>
            </select>
          </label>
        </div>
      </div>

      <div className='space-y-6'>
        {sortedItem().map(p => (
          <div key={p.id} className="card card-side bg-base-100 shadow-sm mt-5">
            <figure className='p-5'>
              <img className='w-[100px] rounded-2xl' src={p.image} alt={p.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{p.name}</h2>
              <p className='font-semibold'>{p.description}</p>
              <p className='font-semibold'><span className='font-black'>Price:</span> ${p.price}</p>
              <div className="card-actions justify-end">
                <button onClick={()=>handelRemove(p.id)} className="btn">❌</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className=' space-y-3'>
        <h1 className='text-2xl font-bold'>rechart</h1>
        <div className='bg-gray-200 border rounded-xl p-4 h-80' >
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
     
        data={  cartChart}
       
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis  />
        <Tooltip />
        <Legend />
        <Bar dataKey="Total" fill="#8884d8"  />
      </BarChart>
    </ResponsiveContainer>


        </div>
      </div>
    </>
  );
};

export default Wishlist;
