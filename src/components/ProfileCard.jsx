import "../styles/Header.css";

function ProfileCard({id, name, team, imgUrl, job, tel, email, handleModify, handleDelete }) {

    return (
        <div className="card">
            <div className="profileBox">
                <img src={imgUrl} />
                <h3>{name}</h3>
            </div>
            <div className="info">
                <p><b>Team. {team}</b></p>
                <p><b>{job}</b></p>
                <p><b>tel.</b> {tel}</p>
                <p><b>email.</b> {email}</p>
                <div className="buttonGroup">
                    <button onClick={() => handleModify(id)} id="modify">수정</button>
                    <button onClick={() => handleDelete(id)} id="delete">삭제</button>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;