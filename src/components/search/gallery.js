import React from "react";

const Gallery = ({photoResults})=>{
    return <div className={"grid grid-cols-4"} data-testid={"gallery"}>
        {photoResults && photoResults.map((data)=>{
            return <div key={data.id} className={"w-auto h-60"} data-testid={"gallery-item"} style={{backgroundImage: `url(${data.urls.regular})`,backgroundSize:'cover',backgroundPosition:'center'}}></div>
        })}
    </div>
}

export default Gallery
