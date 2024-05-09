// import React from "react";
// import ReviewCard from "../layouts/ReviewCard";
// import img1 from "../assets/img/pic1.png";
// import img2 from "../assets/img/pic2.png";
// import img3 from "../assets/img/pic3.png";

// const Review = () => {
//   return (
//     <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
//       <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
//         Customer's Review
//       </h1>
//       <div className=" flex flex-col md:flex-row gap-5 mt-5">
//         <ReviewCard img={img1} name="Sophia Azura" />
//         <ReviewCard img={img2} name="John Deo" />
//         <ReviewCard img={img3} name="Victoria Zoe" />
//       </div>
//     </div>
//   );
// };

// export default Review;
// ContactUsPage.js

import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 p-2 w-full border rounded-md"
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full order-2 border-brightColor hover:text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;


