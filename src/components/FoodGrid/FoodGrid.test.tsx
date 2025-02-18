import { render } from "@testing-library/react";
import FoodGrid from "./FoodGrid";

describe("FoodGrid Component", () => {
  test("should render the component", async () => {
    render(
      <FoodGrid
        foodList={[
          { strMeal: "Food 1", strMealThumb: "https://example.com/image1.jpg" },
          { strMeal: "Food 2", strMealThumb: "https://example.com/image2.jpg" },
        ]}
      />
    );
  });
});
