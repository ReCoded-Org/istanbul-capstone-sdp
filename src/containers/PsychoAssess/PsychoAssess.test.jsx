import React from "react";
import PsychoAssess from "./PsychoAssess";
import { render } from "@testing-library/react";

it("psy. assesment snapshot", () => {
  const tree = render(<PsychoAssess />);
  expect(tree).toMatchSnapshot();
});
