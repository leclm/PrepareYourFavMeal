import React, { useEffect, useState } from "react";
import { Button, FoodGrid } from "../../components";

const categories = [
  "breakfast",
  "side",
  "vegetarian",
  "chicken",
  "pasta",
  "dessert",
];

const Home: React.FC = () => {
  const [step, setStep] = useState(0);
  const [imagesUrls, setImagesUrls] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = (categorie: string) => {
    setLoading(true);

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorie}`)
      .then((response) => response.json())
      .then((data) => {
        const meals = Array.isArray(data.meals) ? data.meals : [];
        const shuffledImages = meals
          .sort(() => Math.random() - 0.5)
          .slice(0, 6)
          .map((meal: { strMealThumb: string }) => meal.strMealThumb);

        setImagesUrls(shuffledImages);
      })
      .catch((error) => console.error("Error:", error))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (step < categories.length) {
      fetchImages(categories[step]);
    }
  }, [step]);

  const handleSelectImage = (src: string) => {
    setSelectedImage(src);
  };

  const handleNextStep = () => {
    if (selectedImage) {
      setSelectedImages((prev) => [...prev, selectedImage]);
      setSelectedImage(null);
      setStep((prev) => prev + 1);
    }
  };

  return (
    <>
      {step < categories.length ? (
        loading ? (
          <p data-testid="loading-message">
            Loading the best dishes you've ever seen...
          </p>
        ) : (
          <>
            <h3 data-testid="category-text">
              Choose your fav dish from the •{categories[step]}• section
            </h3>
            <FoodGrid
              foodList={imagesUrls}
              onSelect={handleSelectImage}
              selected={selectedImage}
              data-testid="grid"
            />

            <Button
              text={"Show me the next delicious option"}
              disabled={!selectedImage}
              onClick={() => handleNextStep()}
            />
          </>
        )
      ) : (
        <>
          <h2>Here are the amazing dishes you chose!</h2>
          <FoodGrid foodList={selectedImages} data-testid="grid-selected" />
        </>
      )}
    </>
  );
};

export default Home;
