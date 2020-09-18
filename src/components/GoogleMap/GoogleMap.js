import React, { Component } from 'react';


import { Map, GoogleApiWrapper } from 'google-maps-react';
import {  Marker } from 'google-maps-react';
import './GoogleMap.css'

export class MapContainer extends Component {
    
    render() {
        const mapStyles = {
            width: '50%%',
            height: '50%',
          };

        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            >
              <Marker position={{ lat: 48.00, lng: -122.00}} />
            </Map>
        );
      }
  }
   
 
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAN7DqZQ_l08K0ByXUoztUw71IipKfGlaA'
  })(MapContainer);