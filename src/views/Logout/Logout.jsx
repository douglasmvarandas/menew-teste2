import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';


const Logout = () => {

    const navigate = useNavigate();

    useEffect(() => {

        localStorage.removeItem('@app-token');
        navigate('/')
        window.location.reload();

    },[])

    return (
        <></>
    )
}

export default Logout