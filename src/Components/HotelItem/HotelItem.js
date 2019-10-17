import React from 'react';

const _hotel= {
    name : ' Barcelo palmeraie' ,
    stars : 5 ,
    category : 'Villages vacances' ,
    adresseReference :'Marrakech, à 0.5 km de : Aéroport de Marrakech-Ménara ',
    ratingValue : 8.1 ,
    ratingMention :'Tres Bien' ,
    otherDeal : [ {source : 'booking.com', prix :140  , url : 'https://www.booking.com/hotel/ma/elbouiba.fr.html?aid=304142&label=gen173nr-1FCAEoggI46AdIM1gEaIwBiAEBmAENuAEXyAEM2AEB6AEB-AELiAIBqAIDuAL7warrBcACAQ&sid=6ae64e2ce6cc12a1ab78b65aa4057c30&all_sr_blocks=307476902_112358116_0_41_0&checkin=2019-09-02&checkout=2019-09-03&dest_id=-38833&dest_type=city&group_adults=2&group_children=0&hapos=5&highlighted_blocks=307476902_112358116_0_41_0&hpos=5&no_rooms=1&sr_order=popularity&srepoch=1567282447&srpvid=f5ea8e47beea0115&ucfs=1&from=searchresults;hptv=do&tpi_r=2'}   ]

}

export class HotelItem extends React.Component{
   

renderStars(){
    let stars = []

    for (let i = 0; i <  this.props.hotel.stars ; i++) {
        stars.push( 
         <span className="icon-ic star">
            <svg xmlns="http://www.w3.org/2000/svg" focusable="false" tabindex="-1" width="12" height="12" viewBox="0 0 12 12">
                <path className="svg-color--primary" fill="#F6AB3F" d="M11.988 5.21c-.052-.275-.27-.488-.545-.534l-3.604-.6L6.63.455C6.542.184 6.287 0 6 0s-.542.184-.632.456L4.16 4.076l-3.603.6c-.275.046-.493.26-.545.533-.052.273.072.55.312.695L3.2 7.63l-1.165 3.493c-.093.28.01.59.25.758.115.08.25.12.382.12.148 0 .295-.05.416-.146L6 9.52l2.917 2.333c.12.098.27.147.416.147.133 0 .267-.04.38-.12.244-.17.346-.478.252-.758L8.8 7.63l2.876-1.725c.24-.144.364-.422.312-.696z"></path>
            </svg>
        </span>) ;
      
   
    }
    return stars
  }

render(){
   
    return(   
    <li>
   { this.props.hotel.srcImg  && this.props.hotel.price &&
    <article className="item">
            <div className="item__wrapper"> 
                <div className="item__image-area">
                    <img src={this.props.hotel.srcImg} height="180px" width="180px"/>
                </div>
                <div className="item__flex-column">
                    <div className="item__details">
                        <div className="item__name">
                            <h3 className="m-0">
                                <span className="item_link">
                                        {this.props.hotel.name}
                                </span>
                            </h3>
                            <div className="stars-badges">
                                <div className="stars__wrap">
                                    {this.renderStars()}
                                </div>
                                <span className="item__accomodation_type">
                                   {this.props.hotel.category}
                                </span>
                            </div>
                        </div>
                        <div className="item__location">
                            <p className="item__details-paragraph">
                                    {this.props.hotel.adresseReference}
                            </p>
                        </div>
                        <button type="button" className="reviews">
                            <span className="item__review">
                                <span className="rating-pill">
                                    <span className="rating-value">{this.props.hotel.rating}</span>
                                    
                                </span>
                                <span className="item__rating-details">
                                        <strong className="item__rating-mention">{this.props.hotel.reviews} </strong>
                                        {this.props.hotel.rating} 

                                </span>

                            </span>
                            <span className="reviews__attributes">
                                    
                            </span>
                        </button>
                        


                    </div>

                   

















                    <section className="item__deal-best">
                        <div className="item__best-link">
                            <div className="item__best-detail">

                            
                               <span className="item__best-price">
                                   <em className="s-12px">{this.props.hotel.vendor}</em>
                                   <strong>{this.props.hotel.price}</strong>
                                   <em className="deal__6-nights">{this.props.hotel.pricePeriod}
                                       <span className="s-12px">{this.props.hotel.price}</span>
                                   </em>
                               </span>

                            </div>
                            <div className="deal__wrapper">
                                <p className="s-12px">Petit-déjeuner gratuit </p>
                                <button type="button" className="btn__deal"  >
                                    <a className="btn__deal__visit" target="_blank" href ={this.props.hotel.url}>Voir l'offre  ></a>   
                                
                                    
                                </button>
                            </div>

                        </div>
                    </section>



                </div>

            </div>
            <div className="item__slideout">

            </div>
        </article> 
         }   
</li>
 
) ;
}

}