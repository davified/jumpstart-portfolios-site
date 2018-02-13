import React from "react";
import ProfileIcon from "./ProfileIcon";
import { shallow } from "enzyme";

describe("ProfileIcon", () => {
  it("should return a CardImg with a profile picture", () => {
    const wrapper = shallow(<ProfileIcon image="link/to/image" />);
    expect(wrapper.find("CardImg.profile-icon").length).toEqual(1);
  });
});
