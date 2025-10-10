
import {  Link, useParams } from 'react-router';
import useCoustomHook from '../../../Houk/useCoustomHook';
import { updetaList } from '../../../Houk/Localestoreg';
 

const Productdetils = () => {
    const {products }= useCoustomHook()
    const {id} = useParams()
    // const Decortor = parseInt(id)
  const SingleCard = products.find( card=> String(card.id) === id)
 const {image,description,name,material,price}=SingleCard ||{}

//  const handelerDetils = () =>{
//     const ExistingList =JSON.parse( localStorage.getItem("Wishlist"))
//        let updatadList=[]
//        if(ExistingList){
//           const isDuplicate = ExistingList.some(p => p.id === SingleCard.id)
//           if (isDuplicate) return alert('Sorry vai')
//          updatadList=[...ExistingList,SingleCard]
//        }
//        else{
//         updatadList.push(SingleCard)
//        }
//   localStorage.setItem("Wishlist",JSON.stringify( updatadList))
//   }

    return (
        <div>
       <div className="card bg-base-100 shadow-sm p-4 ">
  <figure className="h-full overflow-hidden">
    <img className='md:w-full w-[500px] object-cover hover:scale-110 transition ease-in-out'
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
      <Link  to='/Wishlist' onClick={()=>updetaList(SingleCard)} className=" btn btn-outline">Ditels Now</ Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Productdetils;