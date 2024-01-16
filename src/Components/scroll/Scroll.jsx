import React from 'react'
import  './scroll.css'

export default function Scroll({title, page}) {
  return (
    <div className="scroll-text">
        
    <h3 class="subheading mb-2">{page}</h3>
    <h3 class="heading mb-4">{title}</h3>
    <p className="text-team">
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat autem officiis quos ipsum reprehenderit est ab voluptates accusamus perspiciatis! Atque dolorem dolorum numquam ab aliquid repellendus, illo culpa vitae aspernatur?</span>
    </p>
   </div>
  )
}
