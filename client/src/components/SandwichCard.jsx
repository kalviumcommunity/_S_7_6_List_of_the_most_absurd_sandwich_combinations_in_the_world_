import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SandwichList = () => {
    const [sandwiches, setSandwiches] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/sandwiches")
            .then(response => setSandwiches(response.data))
            .catch(error => console.error("Error fetching sandwiches:", error));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">🥪 Sandwich List</h2>
            {sandwiches.length > 0 ? (
                <ul>
                    {sandwiches.map(sandwich => (
                        <li key={sandwich._id} className="mb-4 p-4 bg-white shadow rounded">
                            <p className="text-xl">{sandwich.name}</p>
                            <Link 
                                to={`/sandwich/${sandwich._id}`} 
                                className="text-blue-500 underline"
                            >
                                View Sandwich
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No sandwiches found.</p>
            )}
        </div>
    );
};

export default SandwichList;
