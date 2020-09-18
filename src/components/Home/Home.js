import React, { useState } from 'react';
import Places from '../Places/Places';
import visitPlace from '../VisitPlace/VisitPlace';






const Home = () => {
    
    const [names,setNames] = useState(visitPlace)

    return (

                    
           <div className="container">
             
               <div className="row ">
               {
                   names.map(name=> <Places name={name}></Places>)
               }
            </div>

            </div>
               
        
     
    );
};

export default Home;