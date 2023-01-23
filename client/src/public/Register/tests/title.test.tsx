import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Title } from "../components/title";

describe("Title", () => {
  test("the Component is rendered", () => {
    //params
    const id = "title";
    const msg = "hello";

    render(<Title msg={msg} />);

    const paragraph = screen.getByTestId(id);
    const contentText = paragraph.textContent;
    expect(contentText).equal(msg);
  });
});
