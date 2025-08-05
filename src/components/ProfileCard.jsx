import "../styles/Header.css";

function ProfileCard({ id, name, team, imgUrl, job, tel, email }) {

    return (
        <div className="card">
            <div>
                <img src={imgUrl} />
                <p>Team. {team}</p>
                <p>{job}</p>
                <p>tel. {tel}</p>
                <p>email. {email}</p>
            </div>
            <h3>{name}</h3>
            {/* <div className="button-group">
                <button onClick={handleModify}>수정</button>
                <button onClick={handleDelete}>삭제</button>
            </div> */}
        </div>
    );
}

export default ProfileCard;