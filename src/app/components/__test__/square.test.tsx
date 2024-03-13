import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Square from "../square/square";

describe("Square", () => {
  it("스퀘어버튼이 렌더링 된다", () => {
    render(<Square>버튼</Square>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("버튼");
  });

  it("스퀘어버튼이 클릭된다", async () => {
    const handleClick = jest.fn();
    render(<Square onClick={handleClick}>버튼</Square>);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("스퀘어버튼이 비활성화된다.", async () => {
    render(<Square disabled>버튼</Square>);
    const button = screen.getByRole("button");
    expect(button).toHaveProperty("disabled", true);
    expect(button).toBeDisabled();
  });

  it("스퀘어버튼 비활성화시 클릭되지 않는다.", async () => {
    const handleClick = jest.fn();
    render(
      <Square onClick={handleClick} disabled>
        버튼
      </Square>,
    );
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
