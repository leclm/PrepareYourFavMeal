import { render, screen } from "@testing-library/react";
import FoodImage from "./FoodImage";

test("renders food image with correct src and alt text", () => {
  const testSrc = "https://example.com/food.jpg";
  const testAlt = "Delicious food";
  render(<FoodImage src={testSrc} alt={testAlt} />);
  
  const image = screen.getByAltText(testAlt);
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", testSrc);
});