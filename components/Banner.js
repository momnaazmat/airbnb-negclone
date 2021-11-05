import Image from "next/image";

function banner() {
    return (
        <banner>
            <div className="relative h-[600px] sm:h-[900px] lg:h-[600px] xl:h-[600px] 2xl:h-[600px] " >
                <Image className="sm:h-[5px]" src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
                layout="fill" 
                objectFit="cover"
                />

                <div className="absolute top-1/2 w-full text-center">
                    <h1 className="text-2xl font-semibold ">Not sure where to go? Perfect.</h1>
                    <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-5 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
                </div>
            </div>
        </banner>
    );
}

export default banner;