import React from 'react';

const SandwichCard = ({ name, ingredients, image }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg p-4 bg-white">
      <img className="w-full h-48 object-cover rounded-xl" src={image} alt={name} />
      <div className="py-4">
        <h2 className="font-bold text-xl mb-2">{name}</h2>
        <p className="text-gray-700 text-base">
          Ingredients: {ingredients.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default SandwichCard;
