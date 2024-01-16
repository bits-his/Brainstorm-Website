import './hero.css'
import React from 'react'

export default function Hero({page}) {
  return (
    <>
      <div className="Hero">
      <div className="overlay">
        <h1>{page}</h1>
        <ul>
          <li>
            home
          </li>
          <li>
          {page}
          </li>
        </ul>

      </div>
     </div>
    </>
  )
}
