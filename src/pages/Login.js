import './Login.css'
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

const Login = ({ users }) => {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function HandleLogin(event) {
        event.preventDefault();

        const user = users.find((user) => user.username === username && user.password === password)
        if (user) {
            localStorage.setItem('login', true)
            navigate('/profile', { state: user })
        } else {
            alert('invalid Username or passsword...!')
        }

        useEffect(() => {
            let loggedIn = localStorage.getItem('login')
            if (loggedIn) {
                navigate("/")
            }
        }
        )
    }

    return (
        <>
            <div className='div01'><p><b>Please login to continue...!</b></p></div>
            <form className="frm1" onSubmit={HandleLogin}>
                <label><b>Username</b><input type="text" name={username} onChange={(e) => setUsername(e.target.value)} /></label><br></br>
                <label><b>Password</b><input type="text" name={password} onChange={(e) => setPassword(e.target.value)} /></label>
            </form><br></br>
            <div className='div13'>
                <p><button onClick={HandleLogin} >Submit</button></p><br />
                <p><button onClick={() => navigate('/')}>go back</button></p>
            </div>

        </>
    )
}

export default Login;
