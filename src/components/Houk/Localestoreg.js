 

export const Localestorege = () => {
  try{
    const data = localStorage.getItem("Wishlist")
    return data ? JSON .parse(data):[]
  }
  catch(err){
 console.log(err);
 return[]
  }
};

export const updetaList = SingleCard =>{
    const Wishlist = Localestorege()

    try{
        const isDuplicate =Wishlist.some( p => p.id ===SingleCard.id)
        if(isDuplicate) return 
        const upWislistDetaList=[...Wishlist,SingleCard]
        localStorage.setItem("Wishlist",JSON.stringify(upWislistDetaList))
    }
    catch(err){
        console.log(err)
    }

}