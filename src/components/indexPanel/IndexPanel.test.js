import React from "react";
import { mount } from "enzyme";
import IndexPanel from "./indexPanel";
import ProfileCard from "../profileCard/ProfileCard";

it.skip("should contain at least 3 ProfileCards", () => {
  const profiles = [
    {
      name: "martin fowler",
      description: "some description",
      tagline: "i am a guru",
      skills: ["a", "b", "c"]
    }
  ];
  const wrapper = mount(<IndexPanel profiles={profiles} />);
  expect(wrapper.find(ProfileCard)).toHaveLength(1);
});
