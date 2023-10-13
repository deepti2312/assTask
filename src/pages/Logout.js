import { useNavigate } from "react-router-dom"

const Logout = () => {
    const navigate = useNavigate()

    return (
        <>
            <h1>you have successfully logged out...!</h1>
            <button onClick={() => navigate('/')}>go back</button>

        </>
    )
}

export default Logout;