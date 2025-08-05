import { Outlet } from 'react-router-dom';
import Header from "../components/Header"

function ProfileLayout() {
    return (
        <>
            <Header/>
            <Outlet />
        </>
    );
}

export default ProfileLayout;