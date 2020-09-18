import React from 'react';
import './Places.css'

import { Link } from 'react-router-dom';
const Places = (props) => {

    const {name,id,img} = props.name;
    console.log(name);
    return (
    
       
     
        <div className="place" style={{backgroundImage:`url(${img})`}}>
        <Link to={`/form/${name}`}>  <h2>{name}  </h2></Link>
   
        </div>

     
        
   
    );
};

export default Places;