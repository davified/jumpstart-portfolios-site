import React from "react";
import { mount } from "enzyme";
import CustomNavbar from "./CustomNavbar";

it("CustomNavbar should display the brand and some links", () => {
  const wrapper = mount(<CustomNavbar />);

  expect(wrapper.find("NavbarBrand").contains("JumpStart!"));
  expect(wrapper.find("NavItem").length).toBe(2);
});

it("should toggle isOpen state when NavbarToggler is clicked", () => {
  const wrapper = mount(<CustomNavbar />);
  wrapper.find("NavbarToggler").simulate("click");
  expect(wrapper.state().isOpen).toBe(true);
});

// enzyme:
// allows us to test a component without its dependencies ()
