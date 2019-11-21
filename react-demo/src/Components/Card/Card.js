import React from 'react';
import './Card.css';

function card(props){ console.log("inside card", props);
return(
   
<div class="cardContainer">
    <div>
<div class="imageContainer"><img src={props.cardDetails.compositeProducts[0].EProductMedia.smallURI}></img></div>
<div class="prodInfo">
    <span>{props.cardDetails.compositeProducts[0].EProductMedia.smallTitle}</span>
    </div>
<div>{props.cardDetails.SKU}</div>
<div>$ {props.cardDetails.compositeProducts[0].priceEntry.listPrice}</div>
<div><button className="cardButton">Add to Quote</button></div>
</div>
</div>
)
}

export default card;