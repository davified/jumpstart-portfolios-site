import React from "react";
import { shallow } from "enzyme";
import { Row } from "reactstrap";
import Body from "./Body";

it("body should contain 2 columns in a 1:2 proportion", () => {
  const wrapper = shallow(<Body />);

  expect(wrapper.find(".left-panel")).toHaveLength(1);
  expect(wrapper.find(".main-panel")).toHaveLength(1);
});
