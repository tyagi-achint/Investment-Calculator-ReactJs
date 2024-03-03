import ReactDOM from "react-dom/client";

import "./style.css";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Header />
    <UserInput />
  </>
);
