import ProfileCard from "./ProfileCard";
import { useNavigate } from "react-router-dom";

function ProfileList({ cardData, setCardData }) {
    const navigate = useNavigate()
    const handleDelete = (id) => {
        setCardData(cardData.filter(card => card.id !== id))
    }
    const handleModify = (id) => {
        navigate(`/profile/modify/${id}`);
    }
    return (
        <>
            <h1 className="title">프로필 카드 목록</h1>
            {cardData.map((card) => (
                <ProfileCard key={card.id} id={card.id} name={card.name} team={card.team} imgUrl={card.imgUrl} job={card.job} tel={card.tel} email={card.email} handleModify={handleModify} handleDelete={handleDelete}/>
            ))}
        </>
    );
}

export default ProfileList;