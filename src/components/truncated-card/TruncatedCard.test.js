import React from "react";
import TruncatedCard, { truncateText } from "./TruncatedCard";
import { shallow } from "enzyme";

test("truncate() should not truncate text if string length is below threshold", () => {
  expect(truncateText("hello", 2)).toEqual("hello");
});

test("truncate() should truncate text and add '...' if it's above threshold", () => {
  expect(truncateText("hello world", 1)).toEqual("hello ...");
});

test("TruncatedCard should contain a CardText", () => {
  const wrapper = shallow(<TruncatedCard text="some text here" />);
  expect(wrapper.find("CardText").length).toEqual(1);
});
