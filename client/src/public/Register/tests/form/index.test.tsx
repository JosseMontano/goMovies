import { IndexForm } from "../../components/form";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Form", () => {
  test("would show 'loading' when a clicked", () => {
    const btnId = "customBtn";
    const textLoading = "Loading...";

    render(<IndexForm handleSubmit={() => {}} isLoading={true} />);

    const form = screen.getByTestId(btnId); //find by id

    const allText = form.textContent; //get all the text of form
    let exits = allText?.search(textLoading);
    exits = exits == -1 ? 0 : 1;

    expect(exits).equal(1);
  });
});
