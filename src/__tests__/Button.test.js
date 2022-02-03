import { render, screen } from "@testing-library/react";
import Button from "../components/Button/Button";

describe("Given the Button component", () => {
  describe("When it's rendered", () => {
    test("Then it should be in the document", () => {
      const textButton = "pulsar";

      render(<Button className="" text={textButton} />);

      const buttonElement = screen.queryByRole("button");

      expect(buttonElement).toBeInTheDocument();
    });
  });
});
