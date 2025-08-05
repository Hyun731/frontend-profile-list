import "../styles/Home.css";
import Header from "../components/Header"

function Home() {
    const textList = [
        "Home : 홈화면을 볼 수 있다.",
        "Card List : 카드 리스트를 볼 수 있다.",
        "Make Card : 카드를 만들 수 있다.",
    ];
    const textDate = textList.map((text,index) => <li key={index}>{text}</li>)
    return (
        <>
            <Header />
            <div className="Container">
                <h1 className="title">프로필 카드 리스트 만들기</h1>
                <ul className="list">{textDate}</ul>
            </div>
        </>
    )
}
export default Home