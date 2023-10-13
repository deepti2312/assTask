import './User.css';
import { useNavigate, useLocation } from "react-router-dom"
import { Link } from 'react-router-dom';

const Profile = (users) => {
    const navigate = useNavigate()
    const location = useLocation();
    const propsdata = location.state;

    return (
        <>
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
            </div><br />
            <div className='div13'>
                <p><button onClick={() => navigate("/logout")}>Logout</button></p>
            </div><br />
            <div className='div13'>
                <p><button onClick={() => navigate("/")}>Go back</button></p>
            </div>
            <ul>
                <li>
                    {
                        users.users.map((user) =>
                            <Link to="/details" state={user} >
                                {user.username}</Link>)
                    }
                </li>
            </ul>
        </>
    )
}


export default Profile;