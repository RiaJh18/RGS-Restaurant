import React from "react";
import Button from "../layouts/Button";
import About from "./About";
import Dishes from "./Dishes";
import Menu from "./Menu";
import ContactUsPage from "./Review";

const Home = () => {
  return (
    
   <>
   <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat  " id="home">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-5xl">
        Life is uncertain. Eat dessert first.
        </h1>
        <p className="  text-backgroundColor ">
         

Welcome to RGS, where culinary excellence meets unforgettable hospitality. Step into our world of flavors and indulge in a dining experience like no other. Discover our seasonal menu featuring inspired creations from our passionate chefs, paired with a carefully curated selection of wines and beverages. Join us and embark on a journey of taste and discovery. Life is uncertain – so why not start with dessert? Indulge your cravings and make each moment extraordinary at RGS.
        </p>
        <div className=" lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>

    </div>

       
<About/>
   <Dishes/>
   <Menu/>
   <ContactUsPage/>
   </>

  );
};

export default Home;