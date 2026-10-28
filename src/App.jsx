import "./App.css";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Greeting Message")

  const th = () => setMessage("สวัสดี!")
  const eng = () => setMessage("Hi!")
  const ch = () => setMessage("你好!")

  return (
    <div className="App">
      <div className="greeting-container">{message}</div>
      <div className="buttons">
        <button onClick={th}>สวัสดี!</button>
        <button onClick={eng}>Hi!</button>
        <button onClick={ch}>你好!</button>
      </div>
    </div>
  );
}

export default App;