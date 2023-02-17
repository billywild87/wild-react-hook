import {render, renderHook} from "@testing-library/react";
import React from "react";
import { useCreateFactory } from "../src/useCreateFactory";
import "@testing-library/jest-dom/extend-expect";


const components = {
  mycomponent:({...props})=> <div>{props.text}</div>
}

describe("useCreateFactory", () => {
  it('should be defined',()=>{
    expect(useCreateFactory).toBeDefined();
  });
  it('should return a function that render component',()=>{
    const component = renderHook(()=> useCreateFactory(components,'mycomponent'))
    const { result } = component
    const element = result.current();
    expect(React.isValidElement(element)).toBe(true);
  });
  it('should be props works',()=>{
    const createComponent = useCreateFactory(components, "mycomponent");
    const { result } = renderHook(() => createComponent({ text: "Hello Test" }));
    const element = result.current;
    const { getByText } = render(element ?? <div />);
    const textElement = getByText("Hello Test");
    expect(textElement).toBeInTheDocument();
  });
  it('should  return  null if component is not verified',()=>{
    const component = renderHook(()=> useCreateFactory(components,'fakeComponent'))
    const { result } = component;
    const element = result.current();
    expect(element).toBeNull();
  })

});