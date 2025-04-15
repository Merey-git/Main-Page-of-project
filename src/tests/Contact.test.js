import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "../components/Contact"; 

test("renders contact form and submits data", async () => {
  render(<Contact />);

  expect(screen.getByPlaceholderText(/Your name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Your email/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Your message/i)).toBeInTheDocument();

  // Заполняем форму
  fireEvent.change(screen.getByPlaceholderText(/Your name/i), { target: { value: "Merey Kuanyshkhan" } });
  fireEvent.change(screen.getByPlaceholderText(/Your email/i), { target: { value: "merei.kuanyshkhan@narxoz.kz" } });
  fireEvent.change(screen.getByPlaceholderText(/Your message/i), { target: { value: "Hello" } });

  // Отправляем форму
  fireEvent.click(screen.getByText(/Send/i));

  await waitFor(() => expect(screen.getByText(/Message sent/i)).toBeInTheDocument());
});
