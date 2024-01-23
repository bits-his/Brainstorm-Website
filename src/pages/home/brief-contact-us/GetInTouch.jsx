import './getInTouch.css'
import { NavLink } from 'react-router-dom';

export default function getInTouch(){
    return(
        <>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="fixed-background">
                            <div className="content">
                                <h6 className='shout-out'>GIVE US A SHOUT</h6>
                                <h1 className="mt-3">Are you Ready to have a Talk?</h1>
                                <NavLink className="btn btn-primary rounded-pill cont" to="/contact">
                                    Contact us
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}