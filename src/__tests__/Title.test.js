import { render, screen } from "@testing-library/react";
import Title from "../components/Title/Title";

describe("Given the Title component", () => {
  describe("When it's rendered", () => {
    test("Then it should be in the document", () => {
      const textTitle = "PASO 1";

      render(<Title className="" text={textTitle} />);

      const titleElement = screen.queryByText(textTitle);

      expect(titleElement).toBeInTheDocument();
    });
  });
});
