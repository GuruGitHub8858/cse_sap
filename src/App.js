import React from 'react'

const App = () => {

  const name = "guru"

  function message() {
    alert("hiii")
  }


  return (
    <div>
      {name}
      <p>
        hiii welll
      </p>
      <button onClick={message}>
        Click me
      </button>
    </div>
  )
}

export default App