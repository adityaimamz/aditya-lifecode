/* eslint-disable no-unused-vars */
import { useLogin } from "../hooks/useLogin";


const ProfilePage = () => {
 const username = useLogin();
    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
}

export default ProfilePage;