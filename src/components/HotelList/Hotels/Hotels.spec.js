import React from "react";
import { shallow } from "enzyme";
import Hotels from "./Hotels";

describe("Hotel List", () => {
  const wrapper = shallow(<Hotels />);

  it("renders the component", () => {
    expect(wrapper.find(".hotel-list").exists()).toBe(true);
  });
});
