import React from 'react'
import CustomCards from './CustomCards'
import './customcard.css'
import Scroll from '../../../Components/scroll/Scroll'
import html from '../../../assets/tech/html.png'
import css from '../../../assets/tech/css.png'
import javascript from '../../../assets/tech/javascript.png'
import typescript from '../../../assets/tech/typescript.png'
import reactjs from '../../../assets/tech/reactjs.png'
import redux from '../../../assets/tech/redux.png'
import mongodb from '../../../assets/tech/mongodb.png'
// import figma from '../../../assets/tech/figma.png'
import nodejs from '../../../assets/tech/nodejs.png'
// import git from '../../../assets/tech/git.png'
// import threejs from '../../../assets/tech/threejs.svg'

export default function CustomCardContainer() {
  return (
    <div className='container-fluid mb-5'>
       <Scroll title='Technologies We Use' span='We use a wide variety of technologies to give you the best treatment you deserve'/>
        <div className="row g-1">
        <CustomCards 
            title="Frontend"
            techie={[{name:'HTML', img:html}, {name:'CSS', img:css}, {name:'Javascript', img:javascript}, {name:'Bootstrap'}]}
        />
        <CustomCards 
            title="Frameworks"
            techie={[{name:'React js', img:reactjs}, {name:'React Native' , img:reactjs},{name:'TypeScript', img:typescript}, {name:'Redux' , img:redux}]}
        />
        <CustomCards 
            title="Security"
            techie={[{name:'Web 3.0'}, {name:'Nexus'},{ name:'Cisco'}]}
        />
        <CustomCards 
            title="Database"
            techie={[{name:'Android'},{ name:'IOS'}, {name:'Mangodb', img:mongodb}, {name:'SQL'}]}
        />
        <CustomCards 
            title="Backend"
            techie={[{name:'Node js', img:nodejs}, {name:'Express js'}, {name:'PHP'}, {name:'Python'}]}
        />
        <CustomCards 
            title="Blockchain"
            techie={[{name:'Etherium'}, {name:'Rust'}, {name:'Solidity'}, ]}
        />
        </div>
    </div>
  )
}
