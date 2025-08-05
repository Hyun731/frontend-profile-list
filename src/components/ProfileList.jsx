import ProfileCard from "./ProfileCard";

function ProfileList({ cardData }) {
    return (
        <>
            <h1 className="title">프로필 카드 목록</h1>
            {cardData.map((card) => (
                <ProfileCard key={card.id} name={card.name} team={card.team} imgUrl={card.imgUrl} job={card.job} tel={card.tel} email={card.email}/>
            ))}
        </>
    );
}

export default ProfileList;