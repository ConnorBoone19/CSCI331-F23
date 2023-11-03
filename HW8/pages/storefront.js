import React, { useEffect, useState } from "react";
const MyStoreFront = () =>{

  
    const [filteredProducts, setFilteredProducts] = useState([])
    const [searchStr, setSearchStr] = useState("")

    useEffect(fetchAPIdata, [searchStr])

    function fetchAPIdata(){

        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(products=>{
            const filtered = products.filter((el)=>{return el.title.toLowerCase().includes(searchStr.toLowerCase())})
            const currentFilter = filtered.map((product,index)=>{
                return (
                    <div className="productStyle" key={index}>
                        <p style={{fontStyle:".5rem"}}>{product.title}</p>
                        <p>${product.price}</p>
                        <img style={{width:"100px"}} src={product.image} alt={product.title}/>

                    </div>
                    );
                }
            )
            setFilteredProducts(currentFilter)
        }) 
    }
    useEffect(fetchAPIdata,[])

    function handleChange(event){
        setSearchStr(event.target.value)
    }
    return(
        <div>
            <p>SEARCH BAR</p>
            <input type="text" value={searchStr} onChange={handleChange}/>
            <div style={{display:"flex", flexFlow:"row-wrap"}}>{filteredProducts}</div>
        </div>
    );

}

export default MyStoreFront