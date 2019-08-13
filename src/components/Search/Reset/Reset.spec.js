import React from "react";
import { shallow } from "enzyme";
import Reset from "./Reset";

describe("Reset", () => {
  const wrapper = shallow(<Reset />);

  it("renders the component", () => {
    expect(wrapper.find(".button").exists()).toBe(true);
  });
});
