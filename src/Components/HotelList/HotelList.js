import React from 'react';
import {HotelItem} from '../HotelItem/HotelItem'

export class HotelList extends React.Component{

render(){
    return(
    <div className="HotelList">
        <ol>
        { this.props.hotels && this.props.hotels.map(hotel =>  <HotelItem hotel={hotel} /> )}

        </ol>
 
   </div>

    );
   

}

}