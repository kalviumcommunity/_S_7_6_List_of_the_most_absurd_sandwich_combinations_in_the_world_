
  export default function App() {
    return (
      <div className="flex flex-col min-h-screen bg-yellow-100">
        {/* Header */}
        <header className="bg-black text-white text-center py-5 text-3xl font-bold">
          🥪 Absurd Sandwich in the World 🥪
        </header>
  
        {/* Body */}
        <main className="flex-grow flex flex-col items-center justify-center p-20 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800">
            Welcome to the Land of Crazy Sandwiches! 🥖🍔🍕
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Ever imagined a sushi burger or a spaghetti sandwich? You're in the right place! 🚀
          </p>
          <button className="mt-8 px-8 py-4 bg-yellow-500 text-black rounded-lg text-center font-semibold hover:bg-yellow-300 transition">
            Create Your Own Absurd Sandwich!
          </button>
        </main>
  
        {/* Customer Reviews Section */}
        <section className="p-8 bg-yellow-100 text-left">
          <h2 className="text-3xl font-bold">What People Are Saying</h2>
          <p className="mt-4 italic">"I've never tasted anything so weird and amazing!" - Food Lover</p>
          <p className="mt-2 italic">"This changed my perception of sandwiches forever!" - Sandwich Fanatic</p>
        </section>
  
        {/* Contact Section */}
        <section className="p-8 bg-yellow-100 text-left">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-4">Follow us on social media or send us an email at sandwich@absurd.com!</p>
        </section>
  
        {/* Footer */}
        <footer className="bg-black text-white text-center py-4">
          &copy; 2025 Absurd Sandwiches Inc. | Contact: sandwich@absurd.com
        </footer>
      </div>
    );
  }
  