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
  const [isWrong, setIsWrong] = useState(false)

  const [progress, setProgress] = useState(30);
  const [start, setStart] = useState(false)


  useEffect(() => {
    setTimeout(() => {
      if (progress === 0) {
        setProgress(0)
        console.log('terminou');
        console.log(progress);
      } else {
        setProgress(progress - 1)
        console.log(progress);
      }
    }, 1000)
  }, [progress])

  const handleAnswerClicked = (e, answer) => {
    if (answer === color) {
      setIsWrong(true)
      console.log("Voce acertou: ", e.target.textContent);
      generateColor()
    } else {
      setIsWrong(false)
      generateColor()
      console.log("Voce errou: ", e.target.textContent, "a certa era: ", color);
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
      <Sidebar />
      <div className='color__game'>
        {/* <label htmlFor="">Your Name: </label>
        <input type="text" style={{ padding: '5px', width: '300px', height: '30px', marginBottom: '5px', borderRadius: '10px', fontSize: '1.2rem' }} /> */}
        <hr />
        <h2>Guess the color</h2>
        <progress value={progress} max="30" min="0" style={{ width: '400px', height: '10px', borderRadius: '0px', color: '#fff' }} />
        <div className='color_div' style={{ background: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button style={{ width: '150px', height: '40px', color: 'white', background: '#292929', border: 'none', cursor: 'pointer' }}>Start</button>
        </div>
        <div>
          {
            answers.map(answer => (
              <button
                onClick={(e) => handleAnswerClicked(e, answer)}
                className='color__selected'
                key={answer}>{answer}</button>
            ))
          }
        </div>
      </div>
      <a style={{ position: 'fixed', bottom: '40px', right: '40px', cursor: 'pointer' }}>Reset all data</a>
    </div>
  )
}

export default App
