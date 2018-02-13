import React from "react";
import CompetenciesList from "./CompetenciesList";
import { shallow } from "enzyme";

describe("CompetenciesList", () => {
  it("should render competenciesList", () => {
    const competencies = [
      {
        name: "a",
        profiency: 1
      },
      {
        name: "b",
        profiency: 2
      }
    ];
    const wrapper = shallow(
      <CompetenciesList title="some title" competencies={competencies} />
    );

    expect(wrapper.find("h3").contains("some title")).toEqual(true);
    expect(wrapper.find("BarChart").length).toEqual(1);
    expect(wrapper.find("Bar").length).toEqual(1);
  });
});
