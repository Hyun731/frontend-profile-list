import { useRef } from 'react';
import { useNavigate, useParams } from "react-router-dom";

function ProfileForm({ cardData, setCardData }) {
    const { id } = useParams();
    const user = cardData.find(card => card.id == id)
    console.log(user)
    const nameRef = useRef(null)
    const teamRef = useRef(null)
    const jobRef = useRef(null)
    const telRef = useRef(null)
    const emailRef = useRef(null)
    const defaultImageRef = useRef(null);
    const reverseImageRef = useRef(null);
    const navigate = useNavigate();

    const focusInput = () => {
        const refs = [{ ref: nameRef, name: "이름" }, { ref: teamRef, name: "팀" }, { ref: jobRef, name: "직업" }, { ref: telRef, name: "전화번호" }, { ref: emailRef, name: "이메일" }]
        for (const ref of refs) {
            if (!ref.ref.current.value) {
                ref.ref.current.focus();
                alert(`${ref.name}을 채워주세요.`);
                return
            }
        }
        if (!defaultImageRef.current.checked && !reverseImageRef.current.checked) {
            alert("사진을 선택해주세요.");
            defaultImageRef.current.focus();
            return;
        }
        setCardData(
            cardData.map((card) =>
                card.id == id
                    ? {
                        ...card,
                        name: nameRef.current.value,
                        team: teamRef.current.value,
                        imgUrl: defaultImageRef.current.checked ? defaultImageRef.current.value: reverseImageRef.current.value,
                        job: jobRef.current.value,
                        tel: telRef.current.value,
                        email: emailRef.current.value,
                    }
                    : card
            )
        );
        navigate("/profile/list");

    };
    return (
        <>
            <h1 className="title">프로필 카드 만들기</h1>
            <div className='inputBox'>
                <h2>정보를 입력해주세요.</h2>
                <p><b>Name</b><input type="text" id="name" placeholder="ex)권길현" ref={nameRef} defaultValue={user.name} /></p>
                <p><b>Team</b><input type="text" id="team" placeholder="ex)PARADOX" ref={teamRef} defaultValue={user.team} /></p>
                <p><b>Job</b><input type="text" id="job" placeholder="ex)Backend Developer" ref={jobRef} defaultValue={user.job} /></p>
                <p><b>Phone</b><input type="text" id="phone" placeholder="ex)010-0731-0731" ref={telRef} defaultValue={user.tel} /></p>
                <p><b>Email</b><input type="text" id="email" placeholder="ex)gilhyun.gwon0731@gmail.com" ref={emailRef} defaultValue={user.email} /></p>
                <p><b>Image</b><input type="radio" name="image" defaultValue="/assets/PARADOX_default.png" ref={defaultImageRef} defaultChecked={user.imgUrl === "/assets/PARADOX_default.png"} readOnly />Default<input type="radio" name="image" defaultValue="/assets/PARADOX_reverse.png" ref={reverseImageRef} defaultChecked={user.imgUrl === "/assets/PARADOX_reverse.png"} readOnly />Reverse</p>
                <input type="button" value="등록하기" onClick={focusInput} />
            </div>
        </>
    )
}

export default ProfileForm