 
import { useRouteError } from 'react-router';

const ErrorPages = () =>{
  const error = useRouteError();
  return <div>{error.message}</div>;
}

export default ErrorPages; 


   {/* <Navber/>
     <div>{error.message}</div>
     <Footer/>
  </> */}