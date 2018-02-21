import React from "react";
import { mount } from "enzyme";
import ListView from "./ListView";
import ProfileCard from "../profile-card/ProfileCard";

it("should contain at least 3 ProfileCards", () => {
  const profiles = [
    {
      name: "martin fowler",
      description: "some description",
      tagline: "i am a guru",
      skills: ["a", "b", "c"]
    }
  ];
  const wrapper = mount(<ListView profiles={profiles} />);
  expect(wrapper.find(ProfileCard)).toHaveLength(1);
});
