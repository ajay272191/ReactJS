//component1
const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, "Luna"),
    React.createElement("h3", {}, "Dog"),
    React.createElement("h3", {}, "Havanese"),
  ])
}
// component2
const App = () =>{
  return React.createElement(
  "div",
  {},
  [
    React.createElement("h1", {}, "Adopt Me!"),
    ...[1,2,3,4].map((i) => React.createElement("h2", {}, i)),  //spread operator ...[1,2,3]
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]// [] (array) is technically optional to use for grouping but this is how react will handle internally if we dont use []
  )
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));
