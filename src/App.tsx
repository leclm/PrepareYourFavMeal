import { useState, useEffect } from "react";
import "./App.css";
import FoodGrid from "./components/FoodGrid/FoodGrid";

function App() {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = [];
      for (let i = 0; i < 5; i++) {
        const response = await fetch("https://foodish-api.com/api/images/pasta");
        const data = await response.json();
        fetchedImages.push(data.image);
      }
      setImageUrls(fetchedImages);
    };

    fetchImages();
  }, []);

  return (
    <>
      <h1>Prepare Your Fav Meal</h1>
      <FoodGrid images={imageUrls} />
    </>
  );
}

export default App;
