//component1
const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ])
}
// main component
const App = () =>{
  return React.createElement(
  "div",
  {},
  [
    React.createElement("h1", {id:"my brand"}, "Adopt Me!"),
    React.createElement(Pet, {name: "Luna", animal:"Dog", breed: "Havanese"}),
    React.createElement(Pet, {name: "Pepper", animal:"Bird", breed: "Cockatial"}),
    React.createElement(Pet, {name: "Sudo", animal:"Dog", breed: "Wheaten Terrier"}),
  ]// [] (array) is technically optional to use for grouping but this is how react will handle internally if we dont use []
  )
}
ReactDOM.render(React.createElement(App), document.getElementById("root"));
