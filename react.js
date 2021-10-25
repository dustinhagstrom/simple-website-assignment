const domContainer = document.getElementById("root");

const removeButtonReact = React.createElement(
  "button",
  { onClick: subtract },
  "subtract1"
);

const addButtonReact = React.createElement("button", null, "add1");

const counterH1React = React.createElement("h1", null, "0");

const counterContainer = React.createElement("div", null, [
  removeButtonReact,
  counterH1React,
  addButtonReact,
]);

ReactDOM.render(counterContainer, domContainer);
