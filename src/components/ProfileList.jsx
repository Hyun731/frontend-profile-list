import ProfileCard from "./ProfileCard";
import { useNavigate, useOutletContext } from "react-router-dom";

function ProfileList() {
    const { cardData, setCardData } = useOutletContext();
    const navigate = useNavigate()
    const handleDelete = (id) => {
        fetch(`http://localhost:8080/api/profiles/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(() => {
                setCardData(cardData.filter(card => card.id !== id))
            })
            .catch(err => {
                alert("삭제 실패: " + err.message);
            });
    }
    const handleModify = (id) => {
        navigate(`/profile/modify/${id}`);
    }
    console.log(cardData.map((card) => (card.id)))
    return (
        <>
            <h1 className="title">프로필 카드 목록</h1>
            {cardData.map((card) => (
                <ProfileCard key={card.id} id={card.id} name={card.name} team={card.team} imgUrl={card.imgUrl} job={card.job} tel={card.tel} email={card.email} handleModify={handleModify} handleDelete={handleDelete} />
            ))}
        </>
    );
}

export default ProfileList;