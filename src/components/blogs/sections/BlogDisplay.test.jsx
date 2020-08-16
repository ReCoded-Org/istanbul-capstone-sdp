import React from "react";
import BlogDisplay from "./BlogDisplay";
import { render } from "@testing-library/react";

it("blog display snapshot", () => {
  const tree = render(<BlogDisplay />);
  expect(tree).toMatchSnapshot();
});
