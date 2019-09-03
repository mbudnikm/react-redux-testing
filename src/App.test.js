import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import renderer from "react-test-renderer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should render without craching (with prop all=false)", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App all={false} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should match snapshot", () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchInlineSnapshot(`
    <div
      className="App"
    >
      aaaa 
      46.73920775693817
    </div>
  `);
});
