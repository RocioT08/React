import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";
import "@testing-library/jest-dom";

describe("GifGridItem.test", () => {
  const imgTitle = "Animated GIF";
  const imgUrl =
    "https://media3.giphy.com/media/PMKXvSyDWwQc8/giphy.gif?cid=b1d1d056uwtfhachwkjcdo0og4d4m8990ued0ypenf37rghl&rid=giphy.gif";
  const wrapper = shallow(<GifGridItem title={imgTitle} url={imgUrl} />);

  test("should display <GifGridItem> correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should contains a paragraph with the title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(imgTitle);
  });

  test("should contain the image equals to url and alt", () => {
    const img = wrapper.find("img");

    //console.log(img.html()); // saca el html
    //console.log(img.props()); // saca las propiedades del componente recuperado como un obj
    //console.log(img.prop("src")); // saca el valor de la prop indicada

    expect(img.prop("src")).toBe(imgUrl);
    expect(img.prop("alt")).toBe(imgTitle);
  });

  test("should contains the animate__fadeIn class", () => {
    const div = wrapper.find("div");
    //console.log(div.props());
    const className = div.prop("className");
    expect(className.includes("animate__fadeIn")).toBe(true);
  });
});
