import { render, screen } from "@testing-library/react";
import React from "react";
import { Button } from "./Button.jsx";
import { axe } from "jest-axe";

describe("<Button>", () => {
  it("should display button label", () => {
    render(<Button label={"Greetings"} />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Greetings");
  });

  it("should have no a11y violations", async () => {
    const { container } = render(<Button label={"Greetings"} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
