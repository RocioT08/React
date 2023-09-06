import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GiftGrid from "../../components/GiftGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Test GiftGridItem Component", () => {
  const category = "goku";

  test("should render the component correctly", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GiftGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("should show items when useFetchGifs hook return data", () => {
    const images = [
      {
        id: "abc",
        title: "image_title",
        url: "http://localhost/img/test.jpg",
      },
      {
        id: "abcd",
        title: "image_title_2",
        url: "http://localhost/img/test_2.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: images,
      loading: false,
    });
    const wrapper = shallow(<GiftGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(images.length);
  });
});
