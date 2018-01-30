import React from "react";
import { mount } from "enzyme";
import CustomNavbar from "./CustomNavbar";
import { NavbarToggler } from "reactstrap";

it("should toggle isOpen state when NavbarToggler is clicked", () => {
  const wrapper = mount(<CustomNavbar />);
  wrapper.find("NavbarToggler").simulate("click");
  expect(wrapper.state().isOpen).toBe(true);
});
