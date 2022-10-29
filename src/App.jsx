import react, { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'

const getRandomColor = () => {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',]
  const color = new Array(6).fill('').map(() => digits[Math.floor(Math.random() * digits.length)]).join("")
  return `#${color}`
}

let answerArray = []
let id = 0
const saveColor = (clickedColor, correctColor) => {
  let answerObject = {
    'id': id + 1,
    'answer': clickedColor,
    'color': correctColor
  }
  answerArray.unshift(answerObject)
  id++
}


export default function App() {

  const [color, setColor] = useState('')
  const [generatedAnswers, setGeneratedAnswers] = useState([])
  const [isWrong, setIsWrong] = useState(false)
  const [start, setStart] = useState(false)

  const handleAnswerClicked = (e, answer) => {
    const clickedValue = e.target.textContent
    saveColor(clickedValue, color)
    generateColor()
    if (answer !== color) {
      setIsWrong(true)
    } else {
      setIsWrong(false)
    }
  }

  const generateColor = () => {
    const actualColor = getRandomColor()
    setColor(actualColor);
    setGeneratedAnswers([actualColor, getRandomColor(), getRandomColor()].sort(() => 0.5 - Math.random()))
  }

  useEffect(() => {
    generateColor()
  }, [start])

  return (
    <div className="App">
      <Sidebar answers={answerArray} />
      <div className='color__game'>
        <hr />
        <h2>Guess the color</h2>
        <div className='color_div' style={{ background: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {
            !start ? <button onClick={() => setStart(true)} style={{ width: '150px', height: '40px', color: 'white', background: '#292929', border: 'none', cursor: 'pointer' }}>Start</button> : ''
          }
        </div>
        <div>
          {
            start ? generatedAnswers.map(answer => (
              <button
                onClick={(e) => handleAnswerClicked(e, answer)}
                className='color__selected'
                key={answer}>{answer}</button>
            )) : ''

          }
        </div>
      </div>

    </div>
  )
}