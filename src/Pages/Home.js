import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
   
    useEffect(() => {
       
        

    }, []);
    
      
   return(
    <div className='paras'>
      <h1 > Always at your service</h1>
      
        
      
     
      <button className='button'> BUY NOW</button>
      
     
      </div>
   )  
      
    
}


export default Home;
