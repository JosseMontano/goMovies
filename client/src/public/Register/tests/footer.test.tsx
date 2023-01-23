import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Footer } from "../components/footer";

describe("Footer", () => {
  test("The event click is executed", () => {
    //ids
    const idTest = "btn";

    const click = vi.fn();

    render(<Footer signIn={click} />);

    const btn = screen.getByTestId(idTest);
    fireEvent.click(btn);
    
    expect(click).toHaveBeenCalled();
  });
});
