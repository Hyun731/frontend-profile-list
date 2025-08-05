import { useRef } from 'react';

function ProfileForm() {
    const nameRef = useRef(null)
    const teamRef = useRef(null)
    const jobRef = useRef(null)
    const phoneRef = useRef(null)
    const emailRef = useRef(null)
    const defaultImageRef = useRef(null);
    const reverseImageRef = useRef(null);
    const focusInput = () => {
        const refs = [{ ref: nameRef, name: "이름" }, { ref: teamRef, name: "팀" }, { ref: jobRef, name: "직업" }, { ref: phoneRef, name: "전화번호" }, { ref: emailRef, name: "이메일" }]
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

    };
    return (
        <>
            <h1 className="title">프로필 카드 리스트 만들기</h1>
            <div>
                <h2>정보를 입력해주세요.</h2>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="ex)권길현" ref={nameRef} />
                <label htmlFor="team">Team</label>
                <input type="text" id="team" placeholder="ex)PARADOX" ref={teamRef} />
                <label htmlFor="job">Job</label>
                <input type="text" id="job" placeholder="ex)Backend Developer" ref={jobRef} />
                <label htmlFor="phone">Phone</label>
                <input type="text" id="phone" placeholder="ex)010-0731-0731" ref={phoneRef} />
                <label htmlFor="email">Email</label>
                <input type="text" id="email" placeholder="ex)gilhyun.gwon0731@gmail.com" ref={emailRef} />
                <label>Image</label>
                <label>
                    <input type="radio" name="image" value="default" ref={defaultImageRef} />
                    Default
                </label>
                <label>
                    <input type="radio" name="image" value="reverse" ref={reverseImageRef} />
                    Reverse
                </label>
                <input type="button" value="등록하기" onClick={focusInput} />
            </div>
        </>
    )
}

export default ProfileForm