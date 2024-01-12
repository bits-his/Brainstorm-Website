import './services.css'
import Hero from '../../Components/navbar/Hero/Hero'
import CardContainer from './CardContainer'

export default function Services() {
  return (
    <>
     <Hero page='Services'/>
     <h2 className='mt-5 pt-5 text-center'>WHAT WE OFFER</h2>
     <CardContainer />
      {/* <div className="blob">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
     <path className={`blob1`} fill="#0F62FE" d="M43.5,-60.2C51.4,-54.1,49.4,-34.8,50.2,-19.4C51.1,-4,54.7,7.5,51.3,16.3C47.9,25.1,37.6,31.3,27.9,41C18.1,50.7,9.1,64,-2.2,67C-13.4,70,-26.8,62.6,-34.2,52.1C-41.6,41.7,-43.1,28.1,-50.8,14.2C-58.6,0.3,-72.5,-13.9,-72.2,-26.1C-71.9,-38.3,-57.3,-48.5,-42.8,-52.5C-28.4,-56.5,-14.2,-54.4,1.8,-56.9C17.8,-59.3,35.6,-66.4,43.5,-60.2Z" transform="translate(100 100)" />
     </svg>
     <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" >
     <path className='blob2' fill="#0F62FE" d="M43,-65.6C51.7,-53,51.7,-34.9,53.7,-19.6C55.7,-4.3,59.7,8.2,57.8,20.3C55.9,32.3,48.2,44,37.6,51C27,58.1,13.5,60.5,0.7,59.5C-12.1,58.6,-24.1,54.2,-34.6,47.1C-45.1,40,-54.1,30.3,-63.8,16.9C-73.5,3.5,-83.9,-13.6,-82.8,-30.1C-81.8,-46.6,-69.4,-62.5,-53.7,-72.8C-38,-83.1,-19,-87.8,-0.9,-86.6C17.2,-85.3,34.4,-78.2,43,-65.6Z" transform="translate(100 100)" />
    </svg>
      </div> */}
    </>
  )
}
