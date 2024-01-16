import React from 'react'
import  './scroll.css'

export default function Scroll({title}) {
  return (
    <div className="scroll-text">
    <h2><span>{title}</span></h2>
    <p className="text-team">
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat autem officiis quos ipsum reprehenderit est ab voluptates accusamus perspiciatis! Atque dolorem dolorum numquam ab aliquid repellendus, illo culpa vitae aspernatur?</span>
    </p>
   </div>
  )
}
