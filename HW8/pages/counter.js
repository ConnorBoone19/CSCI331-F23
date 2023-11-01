import React, { useState } from "react"

const CounterButton = (props) =>{
    const [currentCount, setCurrentCount] = useState(0)


    const handleClick= () =>{
        setCurrentCount(currentCount + props.incrementBy)
        if (currentCount >= 10){
            setCurrentCount(0)
        }
    }


    return (
        <div>
            <button onClick={handleClick}>
                + {props.incrementBy}
            </button>
            <div>
                {currentCount}
            </div>

        </div>
    );

}

export default CounterButton