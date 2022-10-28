import react, { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'

const getRandomColor = () => {
  const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',]
  const color = new Array(6).fill('').map(() => digits[Math.floor(Math.random() * digits.length)]).join("")
  return `#${color}`
}

function App() {

  const [color, setColor] = useState('')
  const [generatedAnswers, setGeneratedAnswers] = useState([])
  const [clickedAnswer, setClickedAnswer] = useState([])
  const [correctAnswer, setCorrectAnswer] = useState([])
  const [isWrong, setIsWrong] = useState(false)
  const [start, setStart] = useState(false)
  const [answers, setAnswers] = useState([])


  const valores = {
    clickedAnswer,
    correctAnswer
  }

  const testeAnswer = () => {
    setAnswers(valores)
    console.log("respostas", answers);
  }


  const handleAnswerClicked = (e, answer) => {
    const clickedValue = e.target.textContent
    if (answer === color) {
      setIsWrong(true)
      generateColor()
      setClickedAnswer(clickedValue)
      setCorrectAnswer(color)
    } else {
      setIsWrong(false)
      generateColor()
      setClickedAnswer(clickedValue)
      setCorrectAnswer(color)
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

  // useEffect(() => {
  //   console.log(generatedAnswers, clickedAnswer, correctAnswer);

  // }, [])


  return (
    <div className="App">
      <Sidebar answers={clickedAnswer} color={correctAnswer} />
      <div className='color__game'>
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
            start ? generatedAnswers.map(answer => (
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
