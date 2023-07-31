"use client"; 
import Image from 'next/image'
import Head from 'next/head';
import Link from 'next/link';
// pages/index.js
import { useState } from 'react';
import { Chat } from './components/Chat';


const HomePage = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <Head>
        <title>Leap Agric  | Home</title>
        
      </Head>
   
      <nav className="w-full bg-gray-100">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center  md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block ">
              <a href="#">
              <ul className="items-center justify-center md:flex  md:space-y-0">
              <Image
                 src="/logo_2.png"
                  width={50}
                   height={50}
                   alt="Farmers Application - Products"
                   className="rounded-md mx-2"
                 />
                <h2 className="text-2xl text-green-600 font-bold">Leap Agric</h2>
                </ul>
              </a>
              
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-green"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'block' : 'hidden'
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-green">
                  <Link href="/" className='text-green-600 font-bold hover:text-green-300'>
                    Home
                  </Link>
                </li>
                <li className="text-green">
                  <Link href="#about" className='text-green-600 font-bold hover:text-green-300'>
                    About
                  </Link>
                </li>
                <li className="text-green">
                  <Link href="#products" className='text-green-600 font-bold hover:text-green-300'>
                  Products
                  </Link>
                </li>
                <li className="text-green">
                  <Link href="#help" className='text-green-600 font-bold hover:text-green-300'>
                   Help 
                  </Link>
                </li>
              
                <li className="text-green">
                  <Link href="#contact" className='text-green-600 font-bold hover:text-green-300'>
                   Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <section id="hero" className="py-20">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl text-gray-800 font-bold mb-6">Welcome to Leap Agric Farmers Application</h1>
            <p className="text-xl text-gray-600 mb-8">Find the best products for your farm</p>
            <a href="#" className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full">
              Get Started
            </a>
          </div>
        </section>
        <section id="about" className="bg-gray-100 py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl text-gray-800 font-bold mb-6">About Farmers Application</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2">
                <p className="text-lg text-gray-600 mb-10">
                  Farmers Application is a platform designed to connect farmers with high-quality agricultural products. 
                  Whether you need seeds, fertilizers, or equipment, we provide a wide range of options to help you 
                  enhance your farm's productivity and efficiency.
                </p>
                <p className="text-xl text-gray-800 mb-4">Why choose Farmers Application:</p>
                <ul className="list-disc list-inside text-lg text-gray-600">
                  <li>Access to a wide range of agricultural products</li>
                  <li>High-quality products for improved yield</li>
                  <li>Convenient online ordering and delivery</li>
                  <li>Expert guidance and support for your farming needs</li>
                  <li>Save time and effort by finding everything you need in one place</li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <img src="/local.jpg" alt="Farmers Application - About" className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        <section id="products" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl text-gray-800 font-bold mb-6">Our Products</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 mx-2">
                <img src="/local.jpg" alt="Farmers Application - Products" className="rounded-lg mb-8" />
              </div>
              <div className="md:w-1/2 mx-2">
                <p className="text-lg text-gray-600 mb-10">
                  Explore our extensive collection of farm products, carefully selected to meet the diverse needs of farmers. 
                  From organic seeds to advanced machinery, we ensure that our products are of the highest quality to 
                  support your agricultural operations.
                </p>
                <p className="text-xl text-gray-800 mb-4">Reasons to choose our products:</p>
                <ul className="list-disc list-inside text-lg text-gray-600">
                  <li>Trusted brands and suppliers</li>
                  <li>Products tailored to your specific farming requirements</li>
                  <li>Verified quality and performance</li>
                  <li>Competitive prices and special offers</li>
                  <li>Efficient delivery to your doorstep</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="help" className="bg-gray-100 py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl text-gray-800 font-bold mb-3">Help</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 mx-2">
               
                <p className="text-xl text-gray-800 mb-4">Get the help you were looking for from here:</p>
               <Chat />
              </div>
              <div className="md:w-1/2">
                <img src="/chat_logo.png" alt="Farmers Application - About" className="rounded-lg" />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-gray-100 py-20">
          <div className="container mx-auto">
            <h2 className="text-4xl text-gray-800 font-bold mb-6">Contact Us</h2>
            <p className="text-lg text-gray-600 mb-10">
              Have any questions or suggestions? Feel free to reach out to our friendly team. We are here to assist 
              you in any way we can. Get in touch with us via email or phone, and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="md:w-1/2 mx-2">
                <img src="/local.jpg" alt="Farmers Application - Contact" className="rounded-lg mb-8" />
              </div>
              <div className="md:w-1/2">
                <p className="text-xl text-gray-800 mb-4">Contact Information:</p>
                <ul className="list-disc list-inside text-lg text-gray-600">
                  <li>Email: info@farmersapp.com</li>
                  <li>Phone: +1 123-456-7890</li>
                  <li>Address: 123 Farm Street, City, Country</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-green-600 py-4 text-center text-white">
        <p>&copy; {new Date().getFullYear()} Farmers Application. All rights reserved.</p>
      </footer>
      
    </div>
  );
};

export default HomePage;






