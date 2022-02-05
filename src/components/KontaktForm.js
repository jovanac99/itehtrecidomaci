import { useState } from 'react'

function KontaktForm(props) {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleUsername(e) {
        setUsername(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handleMessage(e) {
        setMessage(e.target.value)
    }


    return (
        <div className="kon-form-div">
            <div className="form-elm">
                <label>Username: </label>
                <input type="text" className="form-control mt-2 mb-2" value={username} onChange={handleUsername} />
            </div>
            <div className="form-elm">
                <label>Email: </label>
                <input type="text" className="form-control mt-2 mb-2" value={email} onChange={handleEmail} />
            </div>
            <div className="form-elm">
                <label>Message: </label>
                <input type="text" className="form-control mt-2 mb-2" value={message} onChange={handleMessage} />
            </div>
            <button type="button" onClick={() => props.submit(username, email, message)} className='btn btn-primary mt-2'>Send message</button>
        </div >
    );
}

export default KontaktForm;
