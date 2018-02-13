import React from "react";
import { shallow } from "enzyme";
import ExperienceCard from "./ExperienceCard";

describe("ExperienceCard", () => {
  it("should render experienceCard", () => {
    const entry = {
      job_role: "dev",
      employer: "dunkin donuts",
      start_date: "01-01-2015",
      end_date: "01-01-2016",
      description: "Lorem ipsum"
    };
    const wrapper = shallow(<ExperienceCard entry={entry} />);

    expect(wrapper.find(".experience-card-title").length).toEqual(1);
    expect(wrapper.find(".experience-card-description").length).toEqual(1);
  });
});
