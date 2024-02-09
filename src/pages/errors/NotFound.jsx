import React from 'react'
import './not-found.css'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <div className='container'>
        <div className='row error'>
          <h4 className='error-code'>404</h4>
          <h2>Page not found</h2>
          <p>Sorry, we couldn’t find the page you’re looking for.</p>
          <div>
            <button><Link to = '/'>back home</Link></button>
            <button><Link to = 'contact'>Contact us</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}
