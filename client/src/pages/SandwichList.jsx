import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SandwichList() {
  const [sandwiches, setSandwiches] = useState([]);
  const [filteredSandwiches, setFilteredSandwiches] = useState([]);
  const [creators, setCreators] = useState([]);
  const [selectedCreator, setSelectedCreator] = useState("all");

  useEffect(() => {
    // Fetch all sandwiches
    fetch("http://localhost:5000/api/sandwiches")
      .then((res) => res.json())
      .then((data) => {
        setSandwiches(data);
        setFilteredSandwiches(data);
        
        // Extract unique creators for dropdown
        const uniqueCreators = [...new Set(data.map(sandwich => sandwich.createdBy))];
        setCreators(uniqueCreators);
      })
      .catch((err) => console.error("Error fetching sandwiches:", err));
  }, []);

  // Filter sandwiches when creator selection changes
  useEffect(() => {
    if (selectedCreator === "all") {
      setFilteredSandwiches(sandwiches);
    } else {
      const filtered = sandwiches.filter(
        (sandwich) => sandwich.createdBy === selectedCreator
      );
      setFilteredSandwiches(filtered);
    }
  }, [selectedCreator, sandwiches]);

  // Handle dropdown change
  const handleCreatorChange = (e) => {
    setSelectedCreator(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-400">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-700">Our Absurd Sandwiches</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <select
                value={selectedCreator}
                onChange={handleCreatorChange}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg appearance-none pr-8 cursor-pointer"
              >
                <option value="all">All Creators</option>
                {creators.map((creator) => (
                  <option key={creator} value={creator}>
                    {creator}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <Link to="/add-sandwich" className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400">
              Add Yours
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredSandwiches.length > 0 ? (
            filteredSandwiches.map((sandwich) => (
              <div key={sandwich._id} className="bg-gray-800 text-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
                <h2 className="text-lg font-bold">Name : {sandwich.name}</h2>
                <p className="text-sm text-gray-400">Ingredients : {sandwich.ingredients.join(", ")}</p>
                <p className="mt-2 text-yellow-400">Absurdity Level : {sandwich.absurdityLevel}/10</p>
                <p className="mt-1 text-gray-300 italic">Experience : "{sandwich.experience}"</p>
                <p className="mt-2 text-sm text-gray-400">Created by: {sandwich.createdBy}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-3">No sandwiches found from this creator.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default SandwichList;