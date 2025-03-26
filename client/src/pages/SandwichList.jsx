import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SandwichList() {
  const [sandwiches, setSandwiches] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/sandwiches")
      .then((res) => res.json())
      .then((data) => setSandwiches(data))
      .catch((err) => console.error("Error fetching sandwiches:", err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-400">
   <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-700">Our Absurd Sandwiches</h1>
        <Link to="/add-sandwich" className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400">
          Add Yours
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sandwiches.length > 0 ? (
          sandwiches.map((sandwich) => (
            <div key={sandwich._id} className="bg-gray-800 text-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
              <h2 className="text-lg font-bold">Name : {sandwich.name}</h2>
              <p className="text-sm text-gray-400"> Ingredients : {sandwich.ingredients.join(", ")}</p>
              <p className="mt-2 text-yellow-400">Absurdity Level : {sandwich.absurdityLevel}/10</p>
              <p className="mt-1 text-gray-300 italic">Experience : "{sandwich.experience}"</p>
              <p className="mt-2 text-sm text-gray-400">Created by: {sandwich.createdBy}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500"> Opps !!!!! No sandwiches found.</p>
        )}
      </div>
    </div>
  </div>
  );
}

export default SandwichList;
