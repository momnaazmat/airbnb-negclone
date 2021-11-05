import React from "react";

function Discover({src, title, description
}) {
    return (
        <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out pl-3">

            <div className="relative">
                <img src={src} layout="fill" className="rounded-xl" />
            </div>
            <div>
                <h2 className=" font-semibold text-xl ">{title}</h2>
                <p className="hidden md:inline">{description} </p>
            </div>
        </div>
    );
}

export default Discover;

