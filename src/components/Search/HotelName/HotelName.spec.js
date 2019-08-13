import React from "react";
import { shallow } from "enzyme";
import HotelName from "./HotelName";

describe("Hotel Name", () => {
  const wrapper = shallow(<HotelName />);

  it("renders the component", () => {
    expect(wrapper.find(".input").exists()).toBe(true);
  });

  it("renders filtered data with correct search", () => {
    expect(
      wrapper
        .find(".input")
        .simulate("change", { target: { value: "some change" } })
    );
    expect(wrapper.find(".input").prop("value")).toEqual("some change");
  });
});
