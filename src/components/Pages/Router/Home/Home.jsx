import { useLoaderData } from "react-router";
import Products from "./Products";
import ProductCard from "./ProductCard";
import { Link } from "react-router";

 

const Home = () => {
    // console.log(dsjfhs.ldf)
    const Product = useLoaderData()
    const productscard = Product.slice(0,6)
    console.log(Product)
    return (
        <>
          <div className="flex justify-between mb-4">
            <h1 className="text-3xl font-bold">Featured Product</h1>
            <Link className="btn btn-outline font-semibold" to="/Products">See All Product</Link>
          </div>
         <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

             {
                productscard.map((Decortor => 
                 <ProductCard key={Decortor.id} Decortor={Decortor}></ProductCard>
                ))
            }
        
        </div>   
        </>
    );
};

export default Home;