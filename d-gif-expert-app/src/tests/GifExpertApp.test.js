import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GifExpertApp from "../GifExpertApp";

describe("Test GifExpertApp Components", () => {
  test("should render the component correctly", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show a list of categories", () => {
    const categories = ["action", "drama"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GiftGrid").length).toBe(categories.length);
  });
});
