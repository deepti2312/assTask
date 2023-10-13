import './User.css';
import { useNavigate, useLocation, Outlet } from "react-router-dom"


const User = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const propsdata = location.state;
    console.log(propsdata)
    return (
        <>
            <nav>
                <div className="div1">
                    <div className="div11">
                        <b>Welcome {propsdata.name}!</b>
                    </div>
                </div>
                <div className='div12'>
                    <p><b>Username : </b> {propsdata.username}</p>
                    <p><b>Post :</b> {propsdata.post}</p>
                    <p><b>Likes :</b> {propsdata.likes}</p>
                    <p><b>Comments :</b> {propsdata.comments}</p>
                </div><br></br>
            </nav>
            <Outlet />
            <div className='div13'>
                <p><button onClick={() => navigate("/")}>Go back</button></p>
            </div>
        </>
    )
}

export default User;
