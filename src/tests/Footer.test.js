import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

test("renders Footer", () => {
  render(<Footer />);
  expect(screen.getByText(/All Rights Reserved/i)).toBeInTheDocument();
});
