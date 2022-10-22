import React from 'react';
import './sidebar.css'
import wrong from '../assets/wrong.png'
import correct from '../assets/check.png'


const SideCardWrong = () => {
    return (
        <div style={{ marginTop: '30px', marginLeft: '50px', display: 'flex' }}>
            <div className='sideColorWrong' style={{ background: '#326754' }}>#326754</div>
            <div className='sideColorWrong' style={{ background: '#825754' }}>#825754</div>
            <p><img src={wrong} style={{ width: '20px' }} alt="Wrong Guess" /> 2 Pts</p>
        </div>

    )
}
const SideCardCorrect = () => {
    return (
        <div style={{ marginTop: '30px', marginLeft: '50px', display: 'flex' }}>
            <div className='sideColorCorrect' style={{ background: '#990101' }}>#990101</div>
            <p><img src={correct} style={{ width: '20px' }} alt="correct Guess" /> 5 Pts</p>
        </div>

    )
}

export default function Sidebar() {
    return (
        <div className='sidebar' style={{ textAlign: 'center' }}>
            <h2>Current/Latest game</h2>
            <hr />
            <span >Guessed Color | Correct Color | Score</span>
            <SideCardWrong />
            <SideCardCorrect />
        </div>
    )
}
