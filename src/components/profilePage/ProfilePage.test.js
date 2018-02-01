import React from "react";
import renderer from "react-test-renderer";
import ProfilePage from "./ProfilePage";

test("ProfilePage should render details for a single profile", () => {
  const profile = {
    name: "fowler",
    description: "some description",
    tagline: "i am a guru",
    skills: ["a", "b", "c"]
  };
  const tree = renderer.create(<ProfilePage profile={profile} />).toJSON();
  expect(tree).toMatchSnapshot();
});
