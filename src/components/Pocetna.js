import Login from './Login'

function Pocetna() {

    const users = [
        { username: 'jovana', password: '12' },
        { username: 'marija', password: '34' },
        { username: 'nenad', password: '56' },
        { username: 'igor', password: '78' },
    ];

    return (
        <div className="poc-div">
            <Login users={users} />
        </div>
    );
}

export default Pocetna;
