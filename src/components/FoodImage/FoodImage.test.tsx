import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FoodImage from "./FoodImage";
import Button from "../Button/Button";

describe("FoodImage Component", () => {
  test("should render the FoodImage component", async () => {
    const mockFoodImage = {
      src: "https://example.com/image1.png",
    };

    render(<FoodImage {...mockFoodImage} />);
  });

  test("when a image is selected, the button is avaliable", async () => {
    const mockOnClick = jest.fn();
    const mockFoodImage = {
      src: "https://example.com/image1.png",
      onClick: mockOnClick,
    };

    const { rerender } = render(
      <>
        <FoodImage {...mockFoodImage} isSelected={false} />
        <Button text="teste button" disabled={true} />
      </>
    );

    const image = screen.getByTestId("food-image");
    const button = screen.getByTestId("button");

    fireEvent.click(image);
    rerender(
      <>
        <FoodImage {...mockFoodImage} isSelected={true} />
        <Button text="teste button" disabled={false} />
      </>
    );

    expect(button).not.toHaveClass("disabled");
  });

  test("when clicked, the image must have a green border", async () => {
    const mockOnClick = jest.fn();
    const mockFoodImage = {
      src: "https://example.com/image1.png",
      onClick: mockOnClick,
    };
    const { rerender } = render(
      <FoodImage {...mockFoodImage} isSelected={false} />
    );
    const image = screen.getByTestId("food-image");

    fireEvent.click(image);
    rerender(<FoodImage {...mockFoodImage} isSelected={true} />);
    expect(image).toHaveClass("selected");
  });
});
