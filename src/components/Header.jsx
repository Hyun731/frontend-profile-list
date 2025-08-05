import "../styles/Header.css";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className="headerBox">
                <h1>Profile Card List</h1>
            </header>
            <nav className="navBar">
                <Link to="/" className="navLink">Home</Link>
                <Link to="/profile/list" className="navLink">Card List</Link>
                <Link to="/profile/form" className="navLink">Make Card</Link>
            </nav>
        </>
    )
}
export default Header