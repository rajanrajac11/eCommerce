import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero bg-gray-900 text-white text-center py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4">Welcome to RRA Shop</h1>
          <p className="text-lg mb-8">
            Discover the best deals on a variety of products curated just for
            you.
          </p>
          <Link
            to="/shop"
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Shop with Us?</h2>
          <div className="flex flex-wrap justify-around">
            <div className="feature-item w-full md:w-1/3 p-6">
              <h3 className="text-xl font-semibold">Quality Products</h3>
              <p className="text-gray-600">
                Hand-picked items from trusted brands.
              </p>
            </div>
            <div className="feature-item w-full md:w-1/3 p-6">
              <h3 className="text-xl font-semibold">Fast Shipping</h3>
              <p className="text-gray-600">
                Get your products delivered quickly and safely.
              </p>
            </div>
            <div className="feature-item w-full md:w-1/3 p-6">
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-600">
                Our team is here to assist you anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta bg-gray-900 text-white py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-lg mb-8">
            Explore our store and find amazing deals on top products.
          </p>
          <Link
            to="/shop"
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg"
          >
            Browse Products
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
