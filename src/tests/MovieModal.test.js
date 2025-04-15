import { render, screen, fireEvent } from "@testing-library/react";
import MovieModal from "../components/MovieModal"; 

test("renders movie modal and closes it", () => {
  const movie = {
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    description: "Description of the movie",
    image: "https://example.com/image.jpg"
  };

  const onClose = jest.fn();

  render(<MovieModal movie={movie} onClose={onClose} />);

  expect(screen.getByText(/Inception/i)).toBeInTheDocument();
  expect(screen.getByText(/Sci-Fi/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText(/Close/i));
  expect(onClose).toHaveBeenCalledTimes(1); 
});
