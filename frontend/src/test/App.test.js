import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders Header component", () => {
  render(<App />); // Removed <MemoryRouter>
  
  // example assertion (adjust depending on your Header)
  expect(screen.getByText(/buzzmart/i)).toBeInTheDocument();
});
