import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("renders About section", () => {
  render(<About />);
  expect(screen.getByText(/Welcome to MovieZone/i)).toBeInTheDocument();
});
