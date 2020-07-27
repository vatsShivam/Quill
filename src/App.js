import React, { Component } from "react";

import axios from "axios";
class App extends Component {
  constructor() {
    super();
    this.state = {
      data:[]
     
    };
  }
 
  componentDidMount() {
   this.getData();
 }
componentDidUpdate(prevState){

  if(prevState.data!==this.state.data){

    setTimeout(this.getData, 3000);
  }

}
 
 getData = () => {
  axios
  .get(
   
   "https://api.nomics.com/v1/currencies/ticker?key=e987b633c2d9ca56e77553b2c4fc63b3"
  
  )
  .then((resp) => {
    
   console.log(resp.data)
   this.setState({data:resp.data})
  
  })
  .catch((error) => {
   
    console.log(error);
  });
};
 renderTableData() {
  const Shivam = this.state.data;

  return Shivam.map((btc) => {
    const {
    
    currency,
    symbol,
    price,
    price_date,
    rank
    } = btc;
   
  
    return (
      <div>

<div class="card col-sm-12" >
  <div class="card-body">
    <h5 class="card-title">Currency: {currency}</h5>
    <h6 class="card-subtitle mb-2 text-muted">Symbol:{symbol}</h6>
    <h1 class="card-text">Price:{price}</h1>
    <p class="card-text">Price Date:{price_date}</p>
    <h2 class="card-text"> Rank :{rank}</h2>
   
  </div>
</div> 

      </div>
    );
  });
}
  render() {
  
    return (
        <div >
          <div className="row">
         {this.renderTableData()}
         </div>
        </div>
    );
  }
}
export default App;