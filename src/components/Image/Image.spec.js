import React from "react";
import { shallow } from "enzyme";
import Image from "./Image";

describe("Image", () => {
  const wrapper = shallow(<Image />);

  it("renders the component", () => {
    expect(wrapper.find(".image").exists()).toBe(true);
  });
});
