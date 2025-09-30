// src/test/App.test.js
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header"; // ✅ fixed path

test("renders Header brand text correctly", () => {
  render(
    <BrowserRouter>
      <Header cartItems={[]} />
    </BrowserRouter>
  );

  // Check specifically the <h3>BuzzMart</h3>
  const brandElement = screen.getByRole("heading", { name: /buzzmart/i, level: 3 });
  expect(brandElement).toBeInTheDocument();
});

test("renders navigation links", () => {
  render(
    <BrowserRouter>
      <Header cartItems={[]} />
    </BrowserRouter>
  );

  expect(screen.getByRole("link", { name: /about us/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /products/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /login/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /cart/i })).toBeInTheDocument();
});
