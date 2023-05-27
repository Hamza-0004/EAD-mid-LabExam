import React, { useState } from 'react';

export default function Timer(){

    let [count, setCount] = useState(10)

    let msg = "Time's up!"

    const funTimeout = setTimeout(()=>{

        if(count == 0){
            stop();
        }
        else{
            setCount(count-1);
        }
        
    },1000)

    function stop(){
        clearTimeout(funTimeout);
    }

    if (count == 0){
        return (
            <h1>Times Up!</h1>
        )

    }
    else{
        return(
            <>
            <h1>Timer: {count}</h1>
            </>
        )
    }
    
}

