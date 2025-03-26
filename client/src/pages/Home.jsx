import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-800">
      {/* Header */}
      <header className="bg-gray-900 text-white text-center py-6 text-4xl font-extrabold shadow-md">
        🥪 Absurd Sandwich in the World 🥪
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="text-6xl font-extrabold text-white leading-tight">
          Welcome to the Land of Crazy Sandwiches!
        </h1>
        <p className="mt-6 text-xl text-gray-200 max-w-2xl">
          Ever imagined a sushi burger or a spaghetti sandwich? You're in the right place! Explore unique, delicious, and absurd sandwich creations like never before.
        </p>
        <div className="mt-8 flex gap-4">
          <button className="px-8 py-4 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-400 transition shadow-md">
            Create Your Own Sandwich
            </button>
            <Link to="/sandwiches">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-lg text-lg font-semibold hover:bg-yellow-400 transition shadow-md">
              View Sandwiches
              </button>
              </Link>
        </div>
      </main>

      {/* Reviews Section */}
      <section className="py-16 px-6 bg-gray-800 shadow-inner">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center">What People Are Saying</h2>
          <div className="mt-8 space-y-6">
            <blockquote className="text-xl italic text-gray-300 border-l-4 border-yellow-500 pl-4">
              "I've never tasted anything so weird and amazing!"
              <span className="block text-right text-yellow-400 font-semibold">- Food Lover</span>
            </blockquote>
            <blockquote className="text-xl italic text-gray-300 border-l-4 border-yellow-500 pl-4">
              "This changed my perception of sandwiches forever!"
              <span className="block text-right text-yellow-400 font-semibold">- Sandwich Fanatic</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white">Get in Touch</h2>
          <p className="mt-4 text-lg text-gray-300">
            Follow us on social media or send us an email at
            <a href="mailto:sandwich@absurd.com" className="text-yellow-500 font-semibold hover:underline"> sandwich@absurd.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6 text-lg font-medium">
        &copy; 2025 Absurd Sandwiches Inc. | Contact: sandwich@absurd.com
      </footer>
    </div>
  );
};
export default Home;
