import logo from "./logo.svg";
import React from "react";
import "./App.css";
import ParentComponent from "./components/ParentComponent";
import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";

function App() {
  return (
    <div className="App">
      {/* <ParentComponent /> */}
      {/* <FocusInput /> */}
      {/* <DocTitleOne /> */}
      {/* <DocTitleTwo />
      <Counter /> */}
      <CounterOne />
      <CounterTwo />
      {/* <ParentComponent />
      <FocusInput /> */}
    </div>
  );
}

export default App;
