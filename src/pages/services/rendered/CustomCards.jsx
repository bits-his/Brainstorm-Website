import './customcard.css'
// import html from '../../../assets/tech/html.png'
// import css from '../../../assets/tech/css.png'
// import javascript from '../../../assets/tech/javascript.png'
// import typescript from '../../../assets/tech/typescript.png'
// import reactjs from '../../../assets/tech/reactjs.png'
// import redux from '../../../assets/tech/redux.png'
// import mongodb from '../../../assets/tech/mongodb.png'
// import figma from '../../../assets/tech/figma.png'
// import nodejs from '../../../assets/tech/nodejs.png'
// import git from '../../../assets/tech/git.png'
// import threejs from '../../../assets/tech/threejs.svg'

const CustomCards = ({title="", techie = []}, img) => {
    return (
        <div className='tech col-12 col-sm-6 col-md-6 col-lg-4'>
           <div className="inside-tech">
           <h3>{title}</h3>
            <hr />
            <div className='d-flex techies'>
                {techie.map((tech, index) => (
               <div className='techie' key={index}> 
               {/* <button key={index} type="button" className="btn m-1 techie">{tech}</button> */}
               <img src={tech.img} alt={tech.name} />
                <span className='tech-name'>{tech.name}</span>
                </div>
                ))}
            </div>
           </div>
        </div> 
    )
}

export default CustomCards;