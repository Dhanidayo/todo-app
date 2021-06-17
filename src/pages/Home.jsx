import { useHistory } from 'react-router-dom';

function Home() {

    const history = useHistory();

    history.push('/Home');

    return (
            <div className="bannerText">
                <h1 className="home-heading">My Todo List</h1>
                <p>List your plans and squash them!</p>
            </div>
    );
}

export default Home;