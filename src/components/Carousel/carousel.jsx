import React, { useState } from 'react'
import './carousel.css'

export default function Carousel() {
  const [startSlider, setStartSlider] = useState(0)

  const handleRightClick = () => {
    if (startSlider > -200) {
      setStartSlider(startSlider - 100)
    }
  }

  const handleLeftClick = () => {
    if (startSlider < 0) {
      setStartSlider(startSlider + 100)
    }
  }

  return (
    <div className="image-container">
      <div className="image-list">
        <div
          className="image-item"
          style={{ transform: `translateX(${startSlider}%)` }}>
          <img src="https://m.media-amazon.com/images/I/61OXViq1AOL._SX3000_.jpg" />
        </div>
        <div
          className="image-item"
          style={{ transform: `translateX(${startSlider}%)` }}>
          <img src="https://m.media-amazon.com/images/I/A1y0ocadh7L._SX3000_.jpg" />
        </div>
        <div
          className="image-item"
          style={{ transform: `translateX(${startSlider}%)` }}>
          <img src="https://m.media-amazon.com/images/I/71+ddQwJCBL._SX3000_.jpg" />
        </div>
      </div>
      <div className="image-btn-container">
        <button className="slider-btn" onClick={handleLeftClick}>
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <button className="slider-btn" onClick={handleRightClick}>
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  )
}
