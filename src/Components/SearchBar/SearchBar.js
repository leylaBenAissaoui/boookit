import React from 'react';

import './SearchBar.css';

export class SearchBar extends React.Component{
     

    constructor(props){
        super(props);
        this.state={destination: ' ', checkIn:' ' ,checkOut:' ' };
      
        this.handleDestinationChange =this.handleDestinationChange.bind(this);
        this.handleCheckInChange =this.handleCheckInChange.bind(this);
        this.handleCheckOutChange =this.handleCheckOutChange.bind(this);
        this.handleSearch =this.handleSearch.bind(this);
       
        
        }

         
          handleCheckOutChange(e){
            this.setState({checkOut :e.target.value});
          
          }
          handleCheckInChange(e){
            this.setState({checkIn :e.target.value});
          
          }
          handleDestinationChange(e){
            this.setState({destination :e.target.value});
          
          }
          handleSearch(e){
          this.props.searchHotel(this.state.destination ,this.state.checkIn ,this.state.checkOut) ;
          e.preventDefault()
          }

      
    render(){

     return(
    <div className="tool-bar_section">
      <div className="SearchBar">
             <div class="destination">
                            <input type="text " placeholder=" à destintion de "  onChange={this.handleDestinationChange}/>
                           
             </div>
             <div class="date_picker" >
                                
                               
                                <span class="uitk-icon uitk-field-icon uitk-icon-medium">
                                    <svg aria-hidden="true" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path>
                                        
                                    </svg>
                                </span>
                                <label>  <span>Arrivé</span></label>
                                   <input type="text "  id="check-in" onChange={this.handleCheckInChange} />
                        </div>
                            
                        <div class="date_picker">
                                
                               
                                <span class="uitk-icon uitk-field-icon uitk-icon-medium">
                                        <svg aria-hidden="true" height="24px" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
                                            <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path>
                                            
                                        </svg>
                                    </span>
                                   <label>  <span>Départ</span></label>
                               
                                   <input type="text "  id="check-out" onChange={this.handleCheckOutChange}/>  
                                   
                        </div>
                        <div class="SearchBar-submit"  >
                                <a  onClick={this.handleSearch} href="#" id="go">chercher</a>
                        </div>
      </div>
           
    </div>
        )
    }
}