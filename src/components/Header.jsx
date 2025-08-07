import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className="headerBox">
                <h1>프로필 카드 리스트</h1>
            </header>
            <nav className="navBar">
                <Link to="/" className="navLink">홈</Link>
                <Link to="/profile/list" className="navLink">카드 목록</Link>
                <Link to="/profile/form" className="navLink">카드 만들기</Link>
            </nav>
        </>
    )
}
export default Header