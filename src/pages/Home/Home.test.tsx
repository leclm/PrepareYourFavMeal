import { render, screen, waitFor } from "@testing-library/react";
import Home from "./Home";
import "@testing-library/jest-dom";

describe("Home Component", () => {
  jest.useFakeTimers();

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ meals: [] }),
    })
  ) as jest.Mock;

  test("show loading message on init", () => {
    render(<Home />);
    expect(screen.getByTestId("loading-message")).toBeInTheDocument();
  });

  test("disables button when no image is selected", async () => {
    render(<Home />);
    await waitFor(() =>
      expect(
        screen.queryByText("Loading the best dishes you've ever seen...")
      ).not.toBeInTheDocument()
    );
    expect(
      screen.getByText("Show me the next delicious option")
    ).toBeDisabled();
  });
});