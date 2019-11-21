import React from 'react';
import './Card.css';

function card(props){ console.log("inside card", props);
return(
   
<div class="cardContainer">
<div>Image</div>
<div>desc</div>
<div>{props.cardDetails.SKU}</div>
<div>price</div>
<div><button>Add to Quote</button></div>

</div>
)
}

export default card;