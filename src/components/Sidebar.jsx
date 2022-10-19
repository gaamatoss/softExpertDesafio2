import React from 'react';
import './sidebar.css'

export default function Sidebar() {
    return (
        <div className='sidebar' style={{ textAlign: 'center' }}>
            <h2>Current/Latest game</h2>
            <hr />
            <span >Guessed Color | Correct Color | Score</span>
            <div style={{ marginTop: '30px' }}>Card</div>
        </div>
    )
}
