import { render, screen } from "@testing-library/react";
import FoodGrid from "./FoodGrid";

test("renders grid with 6 food images", () => {
  const images = [
    "https://example.com/food1.jpg",
    "https://example.com/food2.jpg",
    "https://example.com/food3.jpg",
    "https://example.com/food4.jpg",
    "https://example.com/food5.jpg",
    "https://example.com/food6.jpg",
  ];
  render(<FoodGrid images={images} />);
  
  const displayedImages = screen.getAllByRole("img");
  expect(displayedImages).toHaveLength(6);
});