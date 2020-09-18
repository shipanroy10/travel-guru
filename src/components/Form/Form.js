import React, { useState } from 'react';
import './Form.css'
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Calendar from 'react-calendar';


const Form = () => {
  const [date,setDate] = useState(new Date());
  const onChange = date =>{
    setDate(date)
  }
    const {name} = useParams()
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); // watch input value by passing the name of it
  
    return (
        <>
      <div className="background">
      <div className="about-the-place">        <h1> {name} </h1>
        <p> {name} is a town on the southeast coast of Bangladesh.
        it is known for its charming weather.all over the peaple love this {name} place
        .lot's of people come to {name} place for passing their time with great enjoy  </p>
        <Calendar
        onChange={onChange} value={date}
        />
        </div>
      
       <div className="istForm">
      
       <form className="ship-form" >
 
              <input name="origin" defaultValue=  "dhaka" placeholder="from" ref={register({ required: true })  } />
              {errors.origin && <span className="error">This name is required</span>}
              <p> origin</p>
              <input name="destination" defaultValue=  "cox's bazar" required />
              {errors.destination && <span className="error">This address is required</span>}
              <p>  destination</p>        
              <input type="date" name="" id=""/>
              <p> from </p>
              <input type="date" name="" id=""/>
              <p>to</p>

            <Link to={`/coxbazar/${name}`}>  <input className="changeInput" type="text" value="start booking"/> </Link>
      </form>
      </div>
            
        </div>
      </>       
    );
};

export default Form;