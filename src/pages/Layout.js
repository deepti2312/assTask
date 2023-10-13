import './Layout.css'
import React from "react";
import { useNavigate } from "react-router-dom";


function Dashboard() {
    const navigate = useNavigate()
    const loggedIn = localStorage.getItem('login')
    if (!loggedIn) {
        navigate('/login')
    } else {
        navigate('/')
    }

    return (
        <>
            <div className="fullPage">
                <div className="div0">
                    <div className="div01">
                        <b>F-Inst@..!</b>
                    </div>

                </div>
                <p className="p1">We have some suggetions for you, may be you know them.
                    You can see more details by Clicking them.</p>

                <div className='div02'>
                    <p><button onClick={() => navigate('/login')} >Login</button></p>
                </div><br />
                <div className='div02'>
                    <p><button>Register</button></p>
                </div><br />
                <div className='div02'>
                    <p><button onClick={() => navigate('/logout')}>Logout</button></p>
                </div>
            </div>
        </>
    )
}

export default Dashboard;
