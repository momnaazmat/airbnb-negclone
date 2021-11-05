import React from "react";

function Card({src, title
}) {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative ">
                <img src={src} layout="fill" className="rounded-xl" />
            </div>
            <div className="text-xl font-semibold pb-10" >
                <h2>{title}</h2>
            </div>
        </div>
    )
}

export default Card;