import  './card.css'


function Cards(props) {
  return (
    <div>

        <div className="card">
            <div className="icon">
                {props.icon}

            </div>
            <div className="text">

            <h3>{props.title}</h3>

            </div>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas!</p>
            <p>Lorem, ipsum dolor sit amet consectetur .</p>
            <p>Lorem ipsum dolor sit, .</p>
        </div>
 
    </div>
  )
}

export default Cards