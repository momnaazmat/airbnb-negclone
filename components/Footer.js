import React from "react";

function Footer() {
    return (
        <div className="grid text-sm grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
            <div className="space-y-4  text-gray-800 ">
                <h5 className="font-semibold  ">ABOUT</h5>  
                <p>How Airbnb works</p>
                <p>Newsroom</p>
                <p>Airbnb 2021</p>
                <p>Investors</p>
                <p>Airbnb Plus</p>
                <p>Airbnb Luxe</p>    
                <p>HotelTongiht</p>    
                <p>Airbnb for Work</p>    
                <p>Made possible by Hosts</p>    
                <p>Careers</p>    
                <p>Founders' Letter</p>    
            </div>
            <div className="space-y-4  text-gray-800">
                <h5 className="font-semibold">COMMUNITY</h5>  
                <p>Diversity & Belonging</p>
                <p>Against Discrimination</p>
                <p>Accessibility</p>
                <p>Airbnb Associates</p>
                <p>Host Afghan refugees</p>    
                <p>Guest Referrals</p>    
                <p>Gift cards</p>    
                <p>Airbnb.org</p>    
            </div>
            <div className="space-y-4  text-gray-800">
                <h5 className="font-semibold">HOST</h5>  
                <p>Host your home</p>
                <p>Host an Online Experience</p>
                <p>Host an Experience</p>
                <p>Responsible hosting</p>
                <p>Resource Center</p>    
                <p>Community Center</p>    
            </div>
            <div className="space-y-4 text-gray-800">
                <h5 className="font-semibold">SUPPORT</h5>  
                <p>Our COVID-19 Response</p>
                <p>Help Centre</p>
                <p>Cancellation options</p>
                <p>Neighborhood Support</p>
                <p>Trust & Safety</p>    
            </div>
        </div>
    );
}

export default Footer;
