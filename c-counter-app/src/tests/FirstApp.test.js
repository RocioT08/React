import React from "react";
//import { render } from "@testing-library/react";
import { shallow } from "enzyme";
import FirstApp from "../FirstApp";
import "@testing-library/jest-dom";

describe("FirstApp", () => {
  // NOTA: ESTA PRUEBA SE COMENTA POR QUE YA NO VA A FUNCIONAR CON ENZYME YA QUE ESTA USA JEST
  // test("should return Hola Mundo: Juan Pablo", () => {
  //   const greeting = "Hola Mundo: Juan Pablo";
  //   const { getByText } = render(<FirstApp personName="Juan Pablo" />);
  //   expect(getByText(greeting)).toBeInTheDocument();
  // });

  test("should display <FirstApp/> correctly", () => {
    const greeting = "Hola Mundo: Juan Pablo";
    const wrapper = shallow(<FirstApp personName="Juan Pablo" />);
    //la respuesta sea igual a el snapshot
    expect(wrapper).toMatchSnapshot();
  });

  test("should display the detail sent as props", () => {
    const greeting = "Juan";
    const detail = "This is a default detail in propTypes";
    const wrapper = shallow(<FirstApp personName={greeting} detail={detail} />);

    //.text(), .html()
    //estoy buscando un elemento que tenga esa clase, tambien puedo mandar a buscar por tipo <p>
    const detailContentInSnapshot = wrapper.find(".detailText");

    console.log("<p> content = ", detailContentInSnapshot.html());
    expect(detailContentInSnapshot.text()).toEqual(detail);
  });
});
