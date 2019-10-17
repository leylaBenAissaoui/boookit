import React from 'react';
import {SearchBar} from '../SearchBar/SearchBar' ;
import {HotelList} from '../HotelList/HotelList';

import './App.css';
import { all } from 'q';

const _hotel = {
  name : ' Barcelo palmeraie' ,
  stars : 5 ,
  category : 'Villages vacances' ,
  adresseReference :'Marrakech, à 0.5 km de : Aéroport de Marrakech-Ménara ',
  ratingValue : 8.1 ,
  ratingMention :'Tres Bien' ,
  url : 'https://www.booking.com/hotel/ma/elbouiba.fr.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaIwBiAEBmAENuAEXyAEM2AEB6AEB-AELiAIBqAIDuAL7warrBcACAQ&sid=6ae64e2ce6cc12a1ab78b65aa4057c30&all_sr_blocks=307476902_112358116_0_41_0&checkin=2019-09-02&checkout=2019-09-03&dest_id=-38833&dest_type=city&group_adults=2&group_children=0&hapos=5&highlighted_blocks=307476902_112358116_0_41_0&hpos=5&no_rooms=1&sr_order=popularity&srepoch=1567282447&srpvid=f5ea8e47beea0115&ucfs=1&from=searchresults;hptv=do&tpi_r=2' ,
  otherDeal : [ {source : 'booking.com', prix :140  }   ]

}
const hotels =[_hotel , _hotel , _hotel ,_hotel] ;


class App extends React.Component{

  constructor(props){
         super(props);
         this.state={_hotels : [] };
         this.searchHotel=this.searchHotel.bind(this);
  }
  searchHotel(destination ,checkIn ,checkOut){

    const In = checkIn.split('/') ;
    const in_day =In[0];
    const in_month =In[1];
    const in_year =In[2];
    //check_out
    const Out =checkOut.split('/') ;
    const out_day =Out[0];
    const out_month =Out[1];
    const out_year =Out[2];
    const city = destination ;

    fetch(`http://localhost:3001/api/getData/hotels?city=${city}&in_day=${in_day}&in_month=${in_month}&in_year=${in_year}&out_day=${out_day}&out_month=${out_month}&out_year=${out_year}`)
    .then(res => {
      console.log(res) ;
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      
    return res.json()})
    .then(result=> {
      console.log(result.data) ;
      this.setState({ _hotels : result.data.data })
      
    })
    .catch(err =>console.log(err)) ;
    ///////////////////////////////////////
    let hcom_url = `http://localhost:3001/api/getData/hcom?city=${city}&in_day=${in_day}&in_month=${in_month}&in_year=${in_year}&out_day=${out_day}&out_month=${out_month}&out_year=${out_year}` ;
    let expdia_url = `http://localhost:3001/api/getData/expdia?city=${city}&in_day=${in_day}&in_month=${in_month}&in_year=${in_year}&out_day=${out_day}&out_month=${out_month}&out_year=${out_year}` ;
    //let booking_url = `http://localhost:3001/api/getData/booking?city=${city}&in_day=${in_day}&in_month=${in_month}&in_year=${in_year}&out_day=${out_day}&out_month=${out_month}&out_year=${out_year}` ;

    Promise.all([
      fetch(hcom_url) ,
      fetch( expdia_url) 
     //,fetch(booking_url)

    
    //]).then(([ Ahcom ,Aexpdia ,Abooking]) => {
    ]).then(([ Ahcom ,Aexpdia ]) => {
      let ah =[];
           
      let ab =[];
    
     let ae =[];
     console.log(Ahcom) ;
     console.log(Aexpdia) ;
    // console.log(Abooking) ;
      let all_data = [];
     if(Ahcom.ok){ ah =Ahcom.json() ;} ;
     if(Aexpdia.ok){ ae =Aexpdia.json() ;} ;
    // if(Abooking.ok){ ab =Abooking.json();} ;
      
    return Promise.all([ah , ae ] ) ;
   // return Promise.all([ah , ae , ab] ) ;
       
    }).then((data) => {
      let all_data = [...data[0].data ,...data[1].data];
      //let all_data = [...data[0].data ,...data[1].data,...data[2].data];
     
     // all_data.push(data[0].data);
      //all_data.push(data[1].data);
      //all_data.push(data[2].data);
      //data.forEach(item => all_data.push(item.data)) ;
     // console.dir(data.data) ;
      console.log(all_data);
      this.setState({ _hotels : all_data })
      return all_data ;})
      .then(all_data=>{
        console.log(JSON.stringify(all_data )) ;
      return  fetch(`http://localhost:3001/api/savecache?city=${city}&in_day=${in_day}&in_month=${in_month}&in_year=${in_year}&out_day=${out_day}&out_month=${out_month}&out_year=${out_year}`,
      { method: 'post',
      headers: {'Content-Type':'application/json' },
      body:  JSON.stringify({data :all_data} )})  ;
      
    })
    .catch( e =>console.log(e)) 
  }

   componentDidMount() {
    const in_day ='08';
    const in_month ='10';
    const in_year ='2019';
    //check_out
    const out_day ='10';
    const out_month ='10';
    const out_year ='2019';
    const city ='rabat' ;

    console.log('did Mount') ;

   }

  render(){
    return  (
      <div className="App">
         
         <header>
            <h2>  Book<strong>IT</strong></h2>  
        </header>
          
          <SearchBar searchHotel={this.searchHotel}/>
       
         <main className="main__wrapper">
          
            <HotelList hotels={this.state._hotels}/>
         
         </main>
      </div>
     
    );
  }
  
}

export default App;
