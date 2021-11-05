import React from "react";

function LCard({src, title, description, button 
}) {
    return (
        <div className="relative py-5 cursor-pointer  ">
            <div className="relative min-w-[300px]">
                <img src={src} className="rounded-2xl" layout="fill" objectfit="cover" />
            </div>

            <div className="absolute top-10 left-2 sm:top-32 sm:break-all sm:left-12">
                <h3 className="text-white font-bold text-4xl mb-3 w-64 ">{title}</h3>
                <p className="text-white overflow-ellipsis  min-w-[368px]" >{description} </p>
                <button className="text-black text-sm bg-white px-4 py-2 rounded-lg mt-5">{button}</button>
            </div>
            
        </div>
    );
}

export default LCard;
