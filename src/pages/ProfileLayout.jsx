import { Outlet } from 'react-router-dom';
import Header from "../components/Header"

function ProfileLayout() {
    return (
        <>
            <Header/>
            <div className='Container'>
                <Outlet />
            </div>
        </>
    );
}

export default ProfileLayout;