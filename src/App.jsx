import "./App.css"
import React from "react"
function App() {
  const [color, setColor] = React.useState("purple")
  return (
    <>
      <div className="background" style={{ backgroundColor: color }}>
        <button onClick={() => setColor("crimson")}>Red</button>
        <button onClick={() => setColor("#00AB66")}>Green</button>
        <button onClick={() => setColor("#0047AB")}>Blue</button>
      </div>
    </>
  )
}

export default App
