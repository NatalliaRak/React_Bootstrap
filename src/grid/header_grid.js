import React from "react";


export default function GridHeader(){

   const style={
    color: 'white',
    padding: '2%',
    textAlign: 'center',
    fontSize: '30px',
}
    return(
        <div style={style}>
            <h3 >
                Scandinavian pictures
            </h3>
            <p>click on image to read text</p>
        </div>
    )
}