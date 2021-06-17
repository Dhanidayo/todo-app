import { useContext } from 'react';
import { AppContext } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';

//import styles
import styles from '../styles/navbar.module.css';

function Navbar() {
    
    const context = useContext(AppContext);
    const history = useHistory();

    const logout = () => {
        context.dispatch({
            type: 'LOGOUT',
        })
        history.push('/Home');
    }

    return (
        <nav className={styles.navbar}>
            <Link className={styles.navlink} to='/Home'>Home</Link>
            {context.state.isLoggedIn ? (
                <>
                    <Link className={styles.navlink}  to='/TodoList'>My Todo</Link>
                    <br />
                    <span className={styles.navlink} onClick={logout}>Logout</span>          
                </>
            ) : (
                <>
                    <Link className={styles.navlink} to='/Login'>Login</Link>
                    <br />
                    <Link className={styles.navlink} to='/Register'>Register</Link>
                    <br /> 
                </>
            )}
        </nav>
    );
};

export default Navbar;