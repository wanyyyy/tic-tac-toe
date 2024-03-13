import { render, screen } from "@testing-library/react";
import Header from "../header/header";

describe("Header", () => {
  it("헤더가 렌더링 된다", () => {
    render(<Header>헤더</Header>);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("헤더");
  });
});
