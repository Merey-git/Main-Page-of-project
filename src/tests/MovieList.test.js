import { render, screen, fireEvent } from "@testing-library/react";
import MovieList from "../components/MovieList";

test("opens and closes movie modal", () => {
    render(<MovieList />);
    
    fireEvent.click(screen.getAllByText(/Watch Now/i)[0]);
  
    expect(screen.getByRole("heading", { name: /Inception/i })).toBeInTheDocument();
  
    fireEvent.click(screen.getAllByText(/Close/i)[0]);
  
    expect(screen.queryByRole("heading", { name: /Inception/i })).not.toBeInTheDocument();
  });
  