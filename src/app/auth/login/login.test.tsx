import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./login";

describe("Login", () => {
  it("shows validation error if fields are empty ", () => {
    render(<Login />);
    fireEvent.click(screen.getByRole("button", { name: /login/i })); // Finds only the button
    expect(
      screen.getByText("Email and password are required")
    ).toBeInTheDocument();
  });
  it("Login form renders correctly", () => {
    render(<Login />);
    // expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument(); //getByRole
  });
});
