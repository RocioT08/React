import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";

describe("AddCategory Component Test", () => {
  //const setCategories = () => {};
  const setCategories = jest.fn(); // de esta forma puedo saber si la funcion fue llamada y cuando
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks(); // limpio mocks previos ya que en la prueba 3 se estaba quedando el mock del value del input de la test 2
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("1. should render correctly the component AddCategory", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("2. should chsnge the test value in the input when value is sent", () => {
    const input = wrapper.find("input");
    const value = "Event Value";
    input.simulate("change", {
      target: {
        value: value,
      },
    });

    const inputAfter = wrapper.find("input");
    //console.log(inputAfter.prop("value"));
    expect(inputAfter.prop("value")).toBe(value);
  });

  test("3. should not post the information when number of chars is 2", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault: () => {},
    });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("4. should call setCategories and clean input text ", () => {
    const input = wrapper.find("input");
    const value = "goku";
    input.simulate("change", {
      target: {
        value: value,
      },
    });

    wrapper.find("form").simulate("submit", {
      preventDefault: () => {},
    });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); //verifies if setCategories was called passing a fucntion

    const inputAfter = wrapper.find("input");
    expect(inputAfter.prop("value")).toBe("");
  });
});
