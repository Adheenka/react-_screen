import React from 'react'

const Rendering = ({ number }) => {
    if(number > 4){
        return("postive num")
    } else if (number < 0){
        return <h1>Negative Number</h1>
    }else {
        return <h1>zero</h1>
    }
  
}

export default Rendering