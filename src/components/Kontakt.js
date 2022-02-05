import swal from 'sweetalert';
import KontaktForm from './KontaktForm';

function Kontakt() {

    function submit(username, email, message) {
        swal({
            title: "Username:" + username + " Email:" + email + " Message:" + message,
            icon: "info",
            button: "OK!",
        });
        return;
    }

    return (
        <div className="kon-div">
            <h1 id='cnt'>Contact form</h1>
            <KontaktForm submit={submit} />
        </div>
    );
}

export default Kontakt;
