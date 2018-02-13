import React from "react";
import { mount } from "enzyme";
import ExperienceList from "./ExperienceList";
import ExperienceCard from "../experienceCard/ExperienceCard";

describe("ExperienceList", () => {
  it("should render ExperienceList", () => {
    const entries = [{}, {}, {}];
    const wrapper = mount(<ExperienceList entries={entries} />);

    expect(wrapper.children().length).toEqual(entries.length);
  });
});
