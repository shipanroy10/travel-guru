import React from 'react';
import logo from '../../travel-guru-master/Icon/star_1_.png'
import './Coxdetail.css'

const Coxdetail = (props) => {
    const place = props.place;
    console.log(place)
    return (
            <div className="detail">
            <div>
                <img src={place.img} alt=""/>
            </div>
            <div className="half">
            <h5> {place.type} </h5>
            <p> {place.detail} </p>
            <p> <img style={{width:'10px',height:'10px'}} src={logo} alt=""/> {place.rate} </p>
            <p> $ {place.price}</p>
            </div>
                
            </div>
    );
};

export default Coxdetail;