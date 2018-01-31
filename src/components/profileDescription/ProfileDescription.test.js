import React from "react";
import { shallow } from "enzyme";
import ProfileDescription from "./ProfileDescription";

test("ProfileDescription should have 4 children components", () => {
  const profile = {
    name: "martin fowler",
    description: "some description",
    tagline: "i am a guru",
    skills: ["a", "b", "c"]
  };
  const wrapper = shallow(<ProfileDescription profile />);

  expect(wrapper.find("CardTitle").length).toEqual(1);
  expect(wrapper.find("CardSubtitle").length).toEqual(1);
  expect(wrapper.find("CardText").length).toEqual(1);
  expect(wrapper.find("Button").length).toEqual(1);
});
