import React from "react";
import { render } from "react-dom";

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Bzez naine",
      animal: "Daronne naine",
      breed: "Naine aux gros bzez",
    }),
    React.createElement(Pet, {
      name: "Bzez daronne",
      animal: "Daronne",
      breed: "Gros bzez",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
