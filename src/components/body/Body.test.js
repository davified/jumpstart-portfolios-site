import React from "react";
import { shallow, render, mount } from "enzyme";
import { Row } from "reactstrap";
import { MemoryRouter } from "react-router-dom";
import Body from "./Body";

it("body should contain 2 columns in a 1:2 proportion", () => {
  const wrapper = shallow(<Body />);

  expect(wrapper.find(".left-panel")).toHaveLength(1);
  expect(wrapper.find(".main-panel")).toHaveLength(1);
});

it("Body should display master view and not detail view when user is at / route", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <Body />
    </MemoryRouter>
  );

  expect(wrapper.find("IndexPanel").length).toEqual(1);
  expect(wrapper.find("ProfilePage").length).toEqual(0);
});

it("Body should display master view and not detail view when user is at /profiles/:profileId route", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/profiles/1"]}>
      <Body />
    </MemoryRouter>
  );

  expect(wrapper.find("IndexPanel").length).toEqual(0);
  expect(wrapper.find("ProfilePage").length).toEqual(1);
});
