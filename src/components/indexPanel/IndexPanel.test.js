import React from "react";
import { mount } from "enzyme";
import IndexPanel from "./indexPanel";
import ProfileCard from "../profileCard/ProfileCard";

it("should contain at least 3 ProfileCards", () => {
  const wrapper = mount(<IndexPanel />);
  expect(wrapper.find(ProfileCard)).toHaveLength(4);
});
