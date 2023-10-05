import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
    const usenavigate = useNavigate();
    const [customerlist, listupdate] = useState(null);
   
    useEffect(() => {
       

       

    }, []);

    return (
        <div className="paras">
            
            <h3 > Always at your service </h3>
      
        
      
     
      <button className='button'> Learn More</button>
            
        </div>
    );
}

export default Home;
