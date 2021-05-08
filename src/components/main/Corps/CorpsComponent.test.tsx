import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CorpsComponent from "./CorpsComponent";

describe("<CorpsComponent />", () => {
  test("it should mount", () => {
    render(<CorpsComponent />);

    const corpsComponent = screen.getByTestId("CorpsComponent");

    expect(corpsComponent).toBeInTheDocument();
  });
});
