import "../styles/Header.css";

function ProfileCard({ name, team, imgUrl, job, tel, email }) {

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
            </div>
            <div className="button-group">
                <button onClick={handleModify}>수정</button>
                <button onClick={handleDelete}>삭제</button>
            </div>
        </div>
    );
}

export default ProfileCard;