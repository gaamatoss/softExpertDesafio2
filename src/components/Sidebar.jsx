import React from 'react';
import './sidebar.css'
import wrong from '../assets/wrong.png'
import correct from '../assets/check.png'


const SideCardWrong = (props) => {
    return (
        <div style={{ marginTop: '30px', marginLeft: '50px', display: 'flex' }}>
            <div className='sideColorWrong' style={{ background: props.answers }}>{props.answers}</div>
            <div className='sideColorWrong' style={{ background: props.color }}>{props.color}</div>
            <p><img src={wrong} style={{ width: '20px' }} alt="Wrong Guess" /> 2 Pts</p>
        </div>

    )
}
const SideCardCorrect = (props) => {
    return (
        <div style={{ marginTop: '30px', marginLeft: '50px', display: 'flex' }}>
            <div className='sideColorCorrect' style={{ background: props.color }}>{props.color}</div>
            <p><img src={correct} style={{ width: '20px' }} alt="correct Guess" /> 5 Pts</p>
        </div>

    )
}

export default function Sidebar(props) {

    return (
        <div className='sidebar'>
            <h2>Current/Latest game</h2>
            <hr style={{ width: '300px' }} />
            <span >Guessed Color | Correct Color | Score</span>
            <div className='sideAnswers'>
                {
                    props.answers === props.color ? <SideCardCorrect color={props.color} /> : <SideCardWrong answers={props.answers} color={props.color} />
                }
            </div>
        </div>
    )
}
