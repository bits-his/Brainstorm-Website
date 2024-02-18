import React from 'react'
import TeamCard from '../../pages/about-us/TeamCard'
// import pic0 from '../../assets/team/fahad1.png'
// import pic1 from '../../assets/team/ishaq1.png'
import pic2 from '../../assets/team/mide2.jpg'
// import pic3 from '../../assets/team/musty1.png'
import pic4 from '../../assets/team/daddy.png'
import pic5 from '../../assets/team/ahmad2.png'
import pic6 from '../../assets/team/sadiq1.png'
import pic7 from '../../assets/team/ahmad.png'
import pic8 from '../../assets/team/Abdurrahman-removebg-preview.png'
import pic9 from '../../assets/team/Nagudu.png'
import pic10 from '../../assets/team/nazif.png'
import pic11 from '../../assets/team/mide.png'



export default function TeamCardsContainer() {
  return (
    <div className='team row pt-3'>
        {/* <TeamCard name='' delay={100} pic={pic0} role={'Developer'} ceo={''}/>
        <TeamCard name='' delay={100} pic={pic1} role={'Developer'} ceo={''}/>
        <TeamCard name='' delay={100} pic={pic2} role={'Developer'} ceo={''}/>
        <TeamCard name='' delay={100} pic={pic3} role={'Developer'} ceo={''}/> */}
        <TeamCard name='Abdulsalam Abubakar' delay={100} pic={pic4} role={'Developer'} ceo={''}/>
        <TeamCard name='Sadiq Naibawa' delay={200} pic={pic6} role={'Developer'} ceo={''}/>
        <TeamCard name='Ahmad Kabir' delay={300} pic={pic7} role={'Developer'} ceo={''}/>
        <TeamCard name='Halifa Shuaibu' delay={400} pic={pic9} role={'Developer'} ceo={''}/>
        <TeamCard name='Abdulrahman Nasir' delay={500} pic={pic8} role={'Developer'} ceo={''}/>
        <TeamCard name='Nazif Abdullahi' delay={600} pic={pic10} role={'Developer'} ceo={''}/>
        <TeamCard name='Ahmad Ismail' delay={700} pic={pic5} role={'Developer'} ceo={''}/>
        <TeamCard name='Elemije Ayomide' delay={800} pic={pic11} role={'Developer'} ceo={''}/>
        <TeamCard name='Bashir Jibril' delay={900} pic={pic2} role={'Developer'} ceo={''}/>
        <TeamCard name='Abba Boss' delay={1000} pic={pic2} role={'Developer'} ceo={''}/>
        {/* <TeamCard name='' delay={100} pic={pic14} role={'Developer'} ceo={''}/>
        <TeamCard name='' delay={100} pic={pic15} role={'Developer'} ceo={''}/> */}
    </div>
  )
}
