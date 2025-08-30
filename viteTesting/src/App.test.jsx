import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
    it("checking if h1 render in App", () => {
        render(<App />);
        expect(screen.getByRole("heading"))
    })
})
