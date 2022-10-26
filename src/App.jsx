import react, { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'

const getRandomColor = () => {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',]
  const color = new Array(6).fill('').map(() => digits[Math.floor(Math.random() * digits.length)]).join("")
  return `#${color}`
}

function App() {

  const [color, setColor] = useState("")
  const [answers, setAnswers] = useState([])
  const [clickedAnswer, setClickedAnswer] = useState([])
  const [isWrong, setIsWrong] = useState(false)
  const [start, setStart] = useState(false)



  const handleAnswerClicked = (e, answer) => {
    if (answer === color) {
      setIsWrong(true)
      console.log("Voce acertou + 5 Pts");
      setClickedAnswer(e.target.textContent)
      generateColor()
    } else {
      setIsWrong(false)
      generateColor()
      console.log("Voce errou - 1 Pt");
      setClickedAnswer(e.target.textContent)
    }
  }

  const generateColor = () => {
    const actualColor = getRandomColor()
    setColor(actualColor);
    setAnswers([actualColor, getRandomColor(), getRandomColor()].sort(() => 0.5 - Math.random()))
  }

  useEffect(() => {
    generateColor()
  }, [])

  return (
    <div className="App">
      <Sidebar answers={clickedAnswer} color={color} />
      <div className='color__game'>
        {/* <label htmlFor="">Your Name: </label>
        <input type="text" style={{ padding: '5px', width: '300px', height: '30px', marginBottom: '5px', borderRadius: '10px', fontSize: '1.2rem' }} /> */}
        <hr />
        <h2>Guess the color</h2>
        {/* <progress value={progress} max="30" min="0" style={{ width: '400px', height: '10px', borderRadius: '0px', color: '#fff' }} /> */}
        <div className='color_div' style={{ background: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {
            !start ? <button onClick={() => setStart(true)} style={{ width: '150px', height: '40px', color: 'white', background: '#292929', border: 'none', cursor: 'pointer' }}>Start</button> : ''
          }
        </div>
        <div>
          {
            start ? answers.map(answer => (
              <button
                onClick={(e) => handleAnswerClicked(e, answer)}
                className='color__selected'
                key={answer}>{answer}</button>
            )) : ''

          }
        </div>
      </div>
      <a style={{ position: 'fixed', bottom: '40px', right: '40px', cursor: 'pointer' }}>Reset all data</a>
    </div>
  )
}

export default App
