import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/index";

describe("Home", () => {
    it("renders the title", () => {
        render(<Home />);

        const heading = screen.getByRole("heading", {
            name: "NextJS Template",
        });

        expect(heading).toBeInTheDocument();
    });
});
