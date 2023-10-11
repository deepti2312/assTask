import './User.css';
import { useNavigate, useLocation } from "react-router-dom"


const User = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const propsdata = location.state;
    console.log(propsdata)
    return (
        <>
            <div className="div0">
                <div className="div1">
                    <b>Welcome {propsdata.name}!</b>
                </div>
            </div>
            <div className='div2'>
                <p><b>Username : </b> {propsdata.username}</p>
                <p><b>Post :</b> {propsdata.post}</p>
                <p><b>Likes :</b> {propsdata.likes}</p>
                <p><b>Comments :</b> {propsdata.comments}</p>
            </div><br></br>
            <div className='div3'>
                <p><button onClick={() => navigate("/")}>Go Back</button></p>
            </div>
        </>
    )
}


export default User;