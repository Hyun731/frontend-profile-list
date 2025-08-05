import "../styles/Header.css";
import { Link } from 'react-router-dom';

function Header({textLists}) {
    const textDate = textLists.map((text,index) => <li key={index}>{text}</li>)
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
            <div className="Container">
                <h1 className="title">프로필 카드 리스트 만들기</h1>
                <ul className="list">{textDate}</ul>
            </div>
        </>
    )
}
export default Header