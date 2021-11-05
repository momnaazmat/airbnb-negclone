import Head from 'next/head';
import Header from "../components/Header";
import Banner from "../components/Banner";
import Card from "../components/Card";
import LCard from '../components/LCard';
import Discover from '../components/Discover';
import Footer from '../components/Footer';
import React from 'react';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <_app />
    </Provider>
  </React.StrictMode>
);

export default function Home() { 
  return (
    <div className="">
      <Head>
        <title>airbnb-clonee</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h1> Start Building Airbnb</h1> */}

      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 pb-16 rounded-lg m-5 sm:px-16">
        <section>
            <h2 className="text-4xl font-bold py-5 ">Live anywhere</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-1 -ml-3 ">
              <Card 
                src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=480"
                title="Outdoor getaways"
              />
              <Card 
                src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=480"
                title="Unique stays"
              />
              <Card
                src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=480"
                title="Entire homes"            
              />          
            </div>
            <LCard 
              src="https://a0.muscache.com/im/pictures/5b4dc94a-0b4c-4c27-b50f-9c5a5b93c775.jpg"
              title="Try hosting"
              description="Earn extra income and unlock new opportunities by sharing your space."
              button="Learn more"
            />
        </section>
        <section>
            <h2  className="text-4xl font-bold py-5 ">Discover Things to do</h2>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-1 -ml-3 ">
              <Discover
                src="https://a0.muscache.com/im/pictures/ad109d56-2421-40cd-98e6-e114160dc85b.jpg?im_w=480"
                title="Experiences"
                description="Find unforgettable activities near you."
              />
              <Discover 
                src="https://a0.muscache.com/im/pictures/0ce799cb-7553-4369-be9e-d0011e0ef636.jpg?im_w=480"
                title="Online Experiences"
                description="Live, interactive activities led by Hosts."              
              />
              <Discover 
                src="https://a0.muscache.com/im/pictures/247a1ea3-946d-4eb8-a6ab-e8b9a66846f4.jpg?im_w=480"
                title="Featured collection: Wanderlust"
                description="Travel from home with Online Experiences."              
              />
            </div>
        </section>

        
      </main>
      <Footer />
            
    </div>
  );   
}

