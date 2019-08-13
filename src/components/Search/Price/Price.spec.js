import React from "react";
import { shallow } from "enzyme";
import Price from "./Price";

describe("Price", () => {
  const wrapper = shallow(<Price />);

  it("renders the component", () => {
    expect(wrapper.find(".select").exists()).toBe(true);
  });
});
