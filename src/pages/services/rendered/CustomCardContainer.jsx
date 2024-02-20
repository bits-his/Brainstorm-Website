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
import bootstrap from '../../../assets/tech/Bootstrap logo.jpg'
import nodejs from '../../../assets/tech/nodejs.png'
import cisco from '../../../assets/tech/cisco logo.png'
import android from '../../../assets/tech/android_logo.png'
import sql from '../../../assets/tech/SQL_Logo.svg'
import express from '../../../assets/tech/Express_js_logo.png'
import python from '../../../assets/tech/Python_logo.png'
import etherium from '../../../assets/tech/ethereum.png'
// import graph from '../../../assets/tech/GraphQL_Logo.svg.png'
// import postgresql from '../../../assets/tech/Postgresql_elephant.svg'
// import docker from '../../../assets/tech/docker.png'
import ios from '../../../assets/tech/ios_logo.png'
import rust from '../../../assets/tech/rust-logo.svg'
// import sql from '../../../assets/tech/'
// import sql from '../../../assets/tech'
// import sql from '../../../assets/tech'
// import sql from '../../../assets/tech'
// import sql from '../../../assets/tech'
// import sql from '../../../assets/tech'






export default function CustomCardContainer() {
    const data=[
        {
            title:"Frontend",
            techie:[
                {name:'HTML', img:html},
            {name:'CSS', img:css}, 
            {name:'Javascript', img:javascript}, 
            {name:'Bootstrap', img:bootstrap}]
        },
        {
            title:"Backend",
            techie:[{name:'Node js', img:nodejs}, {name:'Express js', img:express}, {name:'Python', img:python}]
        },
        {
            title:"Frameworks",
            techie:[{name:'ReactJs', img:reactjs}, {name:' Native' , img:reactjs},{name:'NextJs', img:typescript}, {name:'VueJs' , img:redux}]
        },      
        {
            title:"Database",
            techie:[{name:'Android', img:android},{ name:'IOS' ,img:ios}, {name:'Mangodb', img:mongodb}, {name:'SQL', img: sql}]
        },      
        {
            title:"BlockChain",
            techie:[{name:'Etherium', img:etherium}, {name:'Rust', img:rust}, {name:'Solidity'}, ]
        },      
        {
            title:"Security",
            techie:[{name:'Web 3.0'}, {name:'Acunetix'},{ name:'Cisco', img:cisco}]
        }
    ]
  return (
    <div className='container-fluid mb-5'>
       <Scroll title='Technologies We Use' span='We use a wide variety of technologies to give you the best treatment you deserve'/>
        <div className="row g-1">
      {data.map((item)=>(  <CustomCards 
        title={item.title}
        techie={item.techie}

    />))}
        </div>
    </div>
  )
}
