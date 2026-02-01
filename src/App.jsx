import React, { useState } from 'react'
import './App.css'
import celebrationGif from './assets/Gif.gif'

const App = () => {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 })

  const handleYesClick = () => {
    setYesPressed(true)
  }

  const handleNoHover = () => {
    const randomX = Math.random() * 200 - 100
    const randomY = Math.random() * 200 - 100
    setNoButtonPosition({ x: randomX, y: randomY })
    setNoCount(noCount + 1)
  }

  const getYesButtonSize = () => {
    return 100 + noCount * 20
  }

  const getNoButtonSize = () => {
    return Math.max(50 - noCount * 5, 30)
  }

  if (yesPressed) {
    return (
      <div className="valentine-container">
        <div className="valentine-card success-card">
          <div className="emoji-container">
            <span className="cat-emoji">😺</span>
            <span className="heart-emoji">💗</span>
          </div>
          
          <h1 className="valentine-question" style={{ marginBottom: '20px' }}>
            Will you be my Valentine?
          </h1>
          
          <h2 className="yay-text">YAY! 🎉</h2>
          
          <div className="celebration-gif">
            <img 
              src={celebrationGif} 
              alt="Celebration Dancing Cat"
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="valentine-container">
      <div className="valentine-card">
        <div className="emoji-container">
          <span className="cat-emoji">😺</span>
          <span className="heart-emoji">💗</span>
        </div>
        
        <h1 className="valentine-question">
          Will you be my Valentine?
        </h1>

        <div className="buttons-container">
          <button
            onClick={handleYesClick}
            style={{ fontSize: `${getYesButtonSize()}%` }}
            className="yes-button"
          >
            Yes
          </button>

          <button
            onMouseEnter={handleNoHover}
            onTouchStart={(e) => {
              e.preventDefault()
              handleNoHover()
            }}
            style={{ 
              fontSize: `${getNoButtonSize()}%`,
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
            }}
            className="no-button"
          >
            No
          </button>
        </div>

        <p className="shy-text">
          *"No" seems a bit shy 😶*
        </p>
      </div>
    </div>
  )
}

export default App