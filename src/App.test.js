import { render, screen } from "@testing-library/react";
import App from "./App";

test("Load test", () => {
  render(<App />);
  const linkElement = screen.getByText(/ENGINE PROPULSION CONTROLS/i);
  expect(linkElement).toBeInTheDocument();
});
