import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

test("calls scrollToSection when nav buttons are clicked", () => {
  const mockScroll = jest.fn();
  const dummyRef = { current: {} };

  render(
    <Header
      scrollToSection={mockScroll}
      homeRef={dummyRef}
      aboutRef={dummyRef}
      contactRef={dummyRef}
    />
  );

  fireEvent.click(screen.getByText("Home"));
  fireEvent.click(screen.getByText("About"));
  fireEvent.click(screen.getByText("Contact"));

  expect(mockScroll).toHaveBeenCalledTimes(3);
});
