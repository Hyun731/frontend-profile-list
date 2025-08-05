import { Outlet } from 'react-router-dom';
import Header from "../components/Header"
import "../styles/ProfileLayout.css";

function ProfileLayout() {
    return (
        <>
            <Header/>
            <div className='cardContainer'>
                <Outlet />
            </div>
        </>
    );
}

export default ProfileLayout;