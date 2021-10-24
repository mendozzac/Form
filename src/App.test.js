import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given an App component", () => {
  describe("When it receives a text '¡HOLA mi gente!'", () => {
    test("Then it should render the text", () => {
      render(<App />);

      const linkElement = screen.getByText("¡HOLA mi gente!");

      expect(linkElement).toBeInTheDocument();
    });
  });
});
