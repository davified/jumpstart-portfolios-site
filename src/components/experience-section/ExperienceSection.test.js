import React from "react";
import { shallow } from "enzyme";
import ExperienceSection from "./ExperienceSection";

describe("ExperienceSection", () => {
  it("should render experience-section", () => {
    const entries = [];
    const wrapper = shallow(
      <ExperienceSection title="some title" entries={entries} />
    );

    expect(wrapper.find("h2").length).toEqual(1);
    expect(wrapper.find("ExperienceList").length).toEqual(1);
  });
});
