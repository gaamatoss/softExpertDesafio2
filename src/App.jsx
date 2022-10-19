import react, { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'

function App() {

  const [color, setColor] = useState("")
  const [answers, setAnswers] = useState([])

  const getRandomColor = () => {
    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',]
    const color = new Array(6).fill('').map(() => digits[Math.floor(Math.random() * digits.length)]).join("")
    return `#${color}`
  }


  useEffect(() => {
    const actualColor = getRandomColor()
    setColor(actualColor);
    console.log(actualColor);
    setAnswers([actualColor, getRandomColor(), getRandomColor()].sort(() => 0.5 - Math.random()))
  }, [])

  return (
    <div className="App">
      {/* <Sidebar></Sidebar> */}
      <div>
        <label htmlFor="">Your Name: </label>
        <input type="text" style={{ padding: '5px', width: '300px', height: '30px', marginBottom: '10px' }} />
        <hr />
        <h2>Guess the color</h2>
        <div className='color_div' style={{ background: color }}></div>
        {
          answers.map(answer => (
            <button style={{ marginRight: "5px" }} key={answer}>{answer}</button>
          ))
        }
      </div>
    </div>
  )
}

export default App
