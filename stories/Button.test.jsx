import { render, screen } from "@testing-library/react";
import React from "react";
import { Button } from "./Button.jsx";

describe("<Button>", () => {
  it("should display button label", () => {
    render(<Button label={"Greetings"} />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Greetings");
  });
});
