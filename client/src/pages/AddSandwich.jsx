import React, { useEffect, useState } from "react";
import axios from "axios";

function SandwichaddingForm() {
    const [reviews, setReviews] = useState([]);
    const [reviewData, setReviewData] = useState({
        name: "",
        ingredients: [],
        absurdityLevel: 1,
        experience: "",
        createdBy: "",
    });
    const [editingId, setEditingId] = useState(null);

    // Fetch all reviews
    const fetchReviews = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/sandwiches");
            setReviews(response.data);
        } catch (error) {
            console.error("Error fetching Sandwiches", error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    // Handle form submission (Create or Update)
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingId) {
                await axios.put(`http://localhost:5000/api/sandwiches/${editingId}`, reviewData);
                alert("Sandwich updated successfully");
            } else {
                await axios.post("http://localhost:5000/api/sandwiches", reviewData);
                alert("Sandwich added successfully");
            }
            setReviewData({ name: "", ingredients: [], absurdityLevel: 1, experience: "", createdBy: "" });
            setEditingId(null);
            fetchReviews();
        } catch (error) {
            console.error("Error in submitting", error);
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // Handle ingredients as an array if needed
        if (name === "ingredients") {
            // Convert comma-separated string to array
            setReviewData({ ...reviewData, [name]: value.split(',').map(item => item.trim()) });
        } else {
            setReviewData({ ...reviewData, [name]: value });
        }
    };

    // Handle edit button click
    const handleEdit = (review) => {
        // Ensure ingredients are properly formatted for editing
        const formattedReview = {
            ...review,
            ingredients: Array.isArray(review.ingredients) ? review.ingredients.join(', ') : review.ingredients
        };
        setReviewData(formattedReview);
        setEditingId(review._id);
    };

    // Handle delete button click
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/sandwiches/${id}`);
            alert("Sandwich deleted successfully");
            fetchReviews();
        } catch (error) {
            console.error("Error deleting a sandwich", error);
        }
    };

    return (
        <div className="bg-gray-800 flex flex-col items-center w-full min-h-screen pt-10">
            <h2 className="text-gray-200 font-bold text-2xl mb-8">
                {editingId ? "Update Sandwich" : "Add Your Absurd Sandwich"}
            </h2>
            <form onSubmit={handleSubmit} className="border-gray-200 border bg-gray-400 shadow-md p-10 w-[400px] rounded-md">
                <label className="block mb-3">
                    <h2 className="text-gray-900 font-medium">Sandwich Name</h2>
                    <input type="text" name="name" placeholder="Name of Sandwich" value={reviewData.name} onChange={handleChange} required className="w-full p-2 mt-1 bg-gray-50 border border-gray-500 rounded-md"/>
                </label>
                <label className="block mb-3">
                    <h2 className="text-gray-900 font-medium">Ingredients</h2>
                    <textarea name="ingredients" placeholder="Enter Ingredients Used (comma-separated)" value={Array.isArray(reviewData.ingredients) ? reviewData.ingredients.join(', ') : reviewData.ingredients} onChange={handleChange} required className="w-full p-2 mt-1 bg-gray-50 border border-gray-500 rounded-md"></textarea>
                </label>

                <label className="block mb-3">
                    <h2 className="text-gray-900 font-medium">Absurdity Level (1-10)</h2>
                    <input type="number" name="absurdityLevel" min="1" max="10" value={reviewData.absurdityLevel} onChange={handleChange} required className="w-full p-2 mt-1 bg-gray-50 border border-gray-500 rounded-md"/>
                </label>
                <label className="block mb-3">
                    <h2 className="text-gray-900 font-medium">Experience</h2>
                    <textarea name="experience" placeholder="Share Your Experience" value={reviewData.experience} onChange={handleChange} required className="w-full p-2 mt-1 bg-gray-50 border border-gray-500 rounded-md"></textarea>
                </label>
                <label className="block mb-3">
                    <h2 className="text-gray-900 font-medium">Created By</h2>
                    <input type="text" name="createdBy" placeholder="Your Name" value={reviewData.createdBy} onChange={handleChange} required className="w-full p-2 mt-1 bg-gray-50 border border-gray-500 rounded-md"/>
                </label>
                <button type="submit" className="bg-yellow-600 text-gray-700 font-bold py-2 px-4 rounded-md hover:bg-green-700">
                    {editingId ? "Update Sandwich" : "ADD SANDWICH"}
                </button>
            </form>

            <div className="w-[600px] mt-5">
                {reviews.map((review) => (
                    <div key={review._id} className="bg-slate-400 p-4 shadow-md rounded-md mb-4">
                        <p><strong>Sandwich Name:</strong> {review.name}</p>
                        <p><strong>Ingredients:</strong> {Array.isArray(review.ingredients) ? review.ingredients.join(', ') : review.ingredients}</p>
                        <p><strong>Absurdity Level:</strong> {review.absurdityLevel}/10</p>
                        <p><strong>Experience:</strong> {review.experience}</p>
                        <p><strong>Created By:</strong> {review.createdBy}</p>
                        <div className="flex gap-2 mt-3">
                            <button onClick={() => handleEdit(review)} className="bg-violet-600 text-white px-3 py-1 rounded-md hover:bg-purple-500">
                                Edit
                            </button>
                            <button onClick={() => handleDelete(review._id)} className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-400">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SandwichaddingForm;