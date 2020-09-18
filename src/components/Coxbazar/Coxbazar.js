import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Coxdetail from '../CoxDetail/Coxdetail';
import Fakedata from '../Fakedata/Fakedata';
import { MapContainer } from '../GoogleMap/GoogleMap';
import './Coxbazar.css'
const Coxbazar = () => {
    const {name} = useParams()
    const fakedata = Fakedata.slice(0,3);
   
const [places,setPlaces] = useState(fakedata);

    return (
       <>
        <div className="container">
            <div className="hotel">
            <h1 style={{color:'white'}}> STAY IN {name} </h1>
            {
                places.map(place=><Coxdetail place={place} ></Coxdetail>)
            }
            </div>
            <div className="map">
            <MapContainer></MapContainer>
            </div>
           
        </div>
       </>
    );
};

export default Coxbazar;