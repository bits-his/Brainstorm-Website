import './getInTouch.css'
import { NavLink } from 'react-router-dom';

export default function getInTouch(){
    return(
        <>
            <section>
                <div className="container-fluid">
                        <div className="fixed-background row">
                            <div className="content">
                                <h6 className='shout-out'>GIVE US A SHOUT</h6>
                                <h1 className="my-3 mide">Always Ready to Solve Your Problem</h1>
                                <NavLink className="btn btn-primary rounded-pill cont" to="/contact">
                                    Contact us
                                </NavLink>
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}