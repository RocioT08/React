import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";
import "@testing-library/jest-dom";

describe("CounterApp.test", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("should display <CounterApp/> correctly", () => {
    console.log("test 1 snapshot = ", wrapper.html());
    expect(wrapper).toMatchSnapshot();
  });

  test("should display the value sent as props", () => {
    const value = 10;
    const wrapper = shallow(<CounterApp value={value} />);
    const elementRetrieved = wrapper.find("h2");
    console.log("test 2 h2 = ", elementRetrieved.text());

    expect(value).toBe(parseInt(elementRetrieved.text()));
  });

  test("should increment the default value (10) in 1", () => {
    const buttonRetrieved = wrapper.find("button").at(0);
    buttonRetrieved.simulate("click");
    console.log("test 3 buttonRetrieved", buttonRetrieved.html());

    const elementRetrieved = wrapper.find("h2");
    console.log("test 3 counter after click = ", elementRetrieved.text());

    expect(11).toBe(parseInt(elementRetrieved.text()));
  });

  test("should decrement the default value (10) in 1", () => {
    const buttonRetrieved = wrapper.find("button").at(2);
    buttonRetrieved.simulate("click");
    console.log("test 4 buttonRetrieved", buttonRetrieved.html());

    const elementRetrieved = wrapper.find("h2");
    console.log("test 4 counter after click = ", elementRetrieved.text());

    expect(9).toBe(parseInt(elementRetrieved.text()));
  });

  test("should set the counter to default value (10)", () => {
    const value = 100;
    let counterText;
    const wrapper = shallow(<CounterApp value={value} />);

    const sumButton = wrapper.find("button").at(0);
    sumButton.simulate("click");
    console.log(
      "test 5 sumButton",
      sumButton.html(),
      wrapper.find("h2").text()
    );

    const resetButton = wrapper.find("button").at(1);
    resetButton.simulate("click");
    console.log(
      "test 5 resetButton",
      resetButton.html(),
      wrapper.find("h2").text()
    );

    counterText = wrapper.find("h2");
    console.log("test 5 counter after click = ", counterText.text());

    expect(value).toBe(parseInt(counterText.text()));
  });
});
