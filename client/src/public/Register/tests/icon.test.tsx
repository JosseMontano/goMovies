import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Icon } from "../../../global/components/loginRegister/icon";

describe("Icon", () => {
  test("The component is rendered", () => {
    const idImg = "icon";
    const urlImg = "src/assets/img1";
    render(<Icon IconImg={urlImg} />);
    const icon = screen.getByTestId(idImg);
    const imgObtained = icon.getAttribute("src");
    expect(imgObtained).equal(urlImg);
  });
});
