import React from "react";

const MyStoreFront = () =>{

    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json[0].title))
    
  
  
  
    return (
        <div>
            <h1>HELLO</h1>
            <label for="inputSearch">SEARCH</label><br></br>
            <input id="inputSearch" type="search"/><br></br>
        </div>

    );
}

export default MyStoreFront