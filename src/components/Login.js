import { useState } from 'react'
import { useNavigate } from 'react-router';

function Login(props) {

    const allUsers = props.users
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
    }

    function login(username, password) {
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].username === username && allUsers[i].password === password) {
                alert('You have successfully logged in! Welcome!')
                navigate('/contact')
                return;
            }
        }
        alert('Please try again!')
    }


    return (
        <div className="login-div">
            <h1>Login form</h1>
            <div className="login-gr" id='usr-lg'>
                <label>Username: </label>
                <input type="text" className="form-control mt-2 mb-2" value={username} onChange={handleUsername} />
            </div>
            <div className="login-gr">
                <label>Password: </label>
                <input type="password" className="form-control mt-2 mb-2" value={password} onChange={handlePassword} />
            </div>
            <button type="button" onClick={() => login(username, password)} id='dugmence' className='btn btn-primary btn-lg mt-3'>Login</button>
        </div>
    );
}

export default Login;
