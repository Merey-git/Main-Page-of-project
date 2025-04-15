import { render, screen, fireEvent } from "@testing-library/react";
import MovieCard from "../components/MovieCard"; // Убедись, что путь к файлу правильный

test("renders movie card and handles watch button click", () => {
  const movie = {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    image: "https://example.com/image.jpg",
    description: "Description of the movie",
    watchLink: "https://example.com/watch"
  };

  const onWatchClick = jest.fn(); // Мокируем функцию, которая сработает при клике

  render(<MovieCard movie={movie} onWatchClick={onWatchClick} />);

  // Проверяем, что элементы отображаются
  expect(screen.getByText(/Inception/i)).toBeInTheDocument();
  expect(screen.getByText(/Sci-Fi/i)).toBeInTheDocument();

  // Симулируем клик по кнопке
  fireEvent.click(screen.getByText(/Watch Now/i));
  expect(onWatchClick).toHaveBeenCalledTimes(1); // Проверяем, что клик был зафиксирован
});
