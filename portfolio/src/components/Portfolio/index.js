import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetter'
import './index.scss'
import portfolioData from '../../data/portfolio.json'


const Portfolio = () => {
  const [letterClass, setLetterclass] = useState('text-animate')
  console.log(portfolioData)

  useEffect(() => {
    const time = setTimeout(() => {
      setLetterclass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(time)
    }
  })

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {
        portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                alt="portfolio"
                className="portfolio-image"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })
      }
      </div>
    );
  }

  return (
    <>
      <div className=" container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
    </>
  )
}

export default Portfolio
