import { Outlet } from 'react-router-dom';
import Header from "../components/Header"
import "../styles/ProfileLayout.css";

function ProfileLayout({cardData,setCardData}) {
    return (
        <>
            <Header/>
            <div className='cardContainer'>
                <Outlet context={{cardData,setCardData}}/>
            </div>
        </>
    );
}

export default ProfileLayout;