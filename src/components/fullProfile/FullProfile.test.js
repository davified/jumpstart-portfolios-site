import React from "react";
import renderer from "react-test-renderer";
import FullProfile from "./FullProfile";

test("ProfilePage should render details for a single profile", () => {
  const profile = {
    name: "fowler",
    description: "some description",
    tagline: "i am a guru",
    skills: ["a", "b", "c"],
    hard_competencies: [],
    soft_competencies: [],
    job_experience: [],
    education_experience: []
  };
  const tree = renderer.create(<FullProfile profile={profile} />).toJSON();
  expect(tree).toMatchSnapshot();
});
