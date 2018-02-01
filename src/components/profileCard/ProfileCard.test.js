import React from "react";
import { shallow } from "enzyme";
import ProfileCard from "./ProfileCard";
import { MemoryRouter } from "react-router-dom";

test("ProfileCard should be displayed as two columns ", () => {
  const wrapper = shallow(
    // <MemoryRouter initialEntries={["/"]} initialIndex={1}>
      <ProfileCard />
  );

  expect(wrapper.find("Col").length).toEqual(2);
  expect(wrapper.find("CardImg").length).toEqual(1);
  expect(wrapper.find("ProfileDescription").length).toEqual(1);
});
