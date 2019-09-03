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
      125
      <ol>
        <li>
          Bertram
           
          Kruszewski
          , 
          Junior .Net Engineer
        </li>
        <li>
          John
           
          Herzog
          , 
          Principal .Net Developer
        </li>
        <li>
          Leila
           
          Szeląg
          , 
          Principal Software Developer
        </li>
        <li>
          Jacopo
           
          Costa
          , 
          .Net Developer
        </li>
        <li>
          Matteo
           
          Martino
          , 
          Junior .Net Developer
        </li>
        <li>
          Conchita
           
          Granados
          , 
          Senior .Net Engineer
        </li>
        <li>
          Dorothea
           
          Biesenbach
          , 
          Junior Big Data Developer
        </li>
        <li>
          Amy
           
          Lenzen
          , 
          Software Engineer
        </li>
        <li>
          Agrypina
           
          Czapla
          , 
          Software Engineer
        </li>
        <li>
          Greta
           
          Zając
          , 
          Software Engineer
        </li>
        <li>
          Rodrigo
           
          Ebert
          , 
          Senior Software Developer
        </li>
        <li>
          Erik
           
          Senger
          , 
          Junior Big Data Engineer
        </li>
        <li>
          Ferne
           
          Denesik
          , 
          Junior .Net Engineer
        </li>
        <li>
          Elody
           
          Kohler
          , 
          Software Developer
        </li>
        <li>
          Roman
           
          Buczkowski
          , 
          Java Developer
        </li>
        <li>
          Władysław
           
          Olejniczak
          , 
          Junior .Net Developer
        </li>
        <li>
          Ansgary
           
          Ruciński
          , 
          Junior .Net Engineer
        </li>
        <li>
          Sander
           
          Bruin
          , 
          Junior Software Engineer
        </li>
        <li>
          Lisa
           
          Veen
          , 
          Junior Software Developer
        </li>
        <li>
          Mikołaj
           
          Sochacki
          , 
          Principal Java Engineer
        </li>
        <li>
          Carmelo
           
          Kris
          , 
          Senior Java Engineer
        </li>
        <li>
          Stanisław
           
          Mikulski
          , 
          Big Data Developer
        </li>
        <li>
          Ruben
           
          Smits
          , 
          .Net Engineer
        </li>
        <li>
          Josefina
           
          Olivares
          , 
          Senior .Net Developer
        </li>
        <li>
          Georg
           
          Mesloh
          , 
          Junior Java Developer
        </li>
      </ol>
    </div>
  `);
});
