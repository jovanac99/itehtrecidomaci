import { useState } from 'react'

function Login(props) {

    const allUsers = props.users
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handlePassword(e) {
        setPassword(e.target.value)
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
            <button type="button" id='dugme' className='btn btn-primary btn-lg mt-3'>Login</button>
        </div>
    );
}

export default Login;
