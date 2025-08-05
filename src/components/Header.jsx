import "../styles/Header.css";

function Header() {
    return (
        <>
            <header class="headerBox">
                <h1>Profile Card List</h1>
            </header>
            <nav class="navBar">
                <a>Home</a>
                <a>Card List</a>
                <a>Make Card</a>
            </nav>
            <div class="Container">
                <h1 class="title">프로필 카드 리스트 만들기</h1>
                <ul class="list">
                    <li>Home : 홈화면을 볼 수 있다.</li>
                </ul>
                <ul class="list">
                    <li>Card List : 카드 리스트를 볼 수 있다.</li>
                </ul>
                <ul class="list">
                    <li>Make Card : 카드를 만들 수 있다.</li>
                </ul>
            </div>
        </>
    )
}
export default Header