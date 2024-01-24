import BallCanvas from './Ball'
import StarWrapper from './SectionWrapper'
import css from '../../../../src/assets/tech/css.png'
import html from '../../../../src/assets/tech/html.png'
import javascript from '../../../../src/assets/tech/javascript.png'
import typescript from '../../../../src/assets/tech/typescript.png'
import git from '../../../../src/assets/tech/git.png'
import reactjs from '../../../../src/assets/tech/reactjs.png'
import redux  from '../../../../src/assets/tech/redux.png'
import tailwind from '../../../../src/assets/tech/tailwind.png'
import nodejs from '../../../../src/assets/tech/nodejs.png'
import mongodb from '../../../../src/assets/tech/mongodb.png'
import figma from '../../../../src/assets/tech/figma.png'
import threejs from '../../../../src/assets/tech/threejs.svg'
import  './technologies.css'

const Technologies = () => {
    const technologies = [
        {
          name: "HTML 5",
          icon: html,
        },
        {
          name: "CSS 3",
          icon: css,
        },
        {
          name: "JavaScript",
          icon: javascript,
        },
        {
          name: "TypeScript",
          icon: typescript,
        },
        {
          name: "React JS",
          icon: reactjs,
        },
        {
          name: "Redux Toolkit",
          icon: redux,
        },
        {
          name: "Tailwind CSS",
          icon: tailwind,
        },
        {
          name: "Node JS",
          icon: nodejs,
        },
        {
          name: "MongoDB",
          icon: mongodb,
        },
        {
          name: "Three JS",
          icon: threejs,
        },
        {
          name: "git",
          icon: git,
        },
        {
          name: "figma",
          icon: figma,
        }
    ];

    return(
        <>      <h3 className='mb-3'>Technologies</h3>
                <div className='balls-together gap-20 mb-5'>
                {technologies.map((technology) => (
                    <div className='w-28 h-28' key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                    </div>
                ))}
                </div>
        </>
    )
}

export default StarWrapper(Technologies, "")