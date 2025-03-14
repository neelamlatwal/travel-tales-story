import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";

describe("check product list", () => {
  it("renders all products correctly", () => {
    const products = [
      { id: 1, name: "Laptop", price: 1000 },
      { id: 2, name: "Phone", price: 500 },
      { id: 3, name: "Tablet", price: 300 },
    ];

    render(<ProductList products={products} />);
    expect(screen.getByText("Product List")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});
