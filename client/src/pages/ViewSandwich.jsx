import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewSandwich = () => {
    const { id } = useParams();
    const [sandwich, setSandwich] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/sandwiches/${id}`)
            .then(response => setSandwich(response.data))
            .catch(error => console.error("Error fetching sandwich:", error));
    }, [id]);

    if (!sandwich) return <p>Loading...</p>;

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold">{sandwich.name}</h1>
            <p className="text-lg mt-2"><strong>Ingredients:</strong> {sandwich.ingredients.join(", ")}</p>
            <p className="text-lg"><strong>Absurdity Level:</strong> {sandwich.absurdityLevel}/10</p>
            <p className="text-lg"><strong>Experience:</strong> {sandwich.experience}</p>
            <p className="text-lg text-gray-500"><strong>Created By:</strong> {sandwich.createdBy}</p>
        </div>
    );
};

export default ViewSandwich;
