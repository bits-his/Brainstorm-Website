import React from 'react'
import  './scroll.css'

export default function Scroll({title, page, span}) {
  return (
    <div className="scroll-text">
        
    <h3 class="subheading mb-2">{page}</h3>
    <h3 class="s-heading mb-4"><span>{title}</span></h3>
    <p className="text-team">
        <span>{span}</span>
    </p>
   </div>
  )
}
