import { GoogleLogin } from 'react-google-login';

const clientId="447438300966-emcm2oet2a7af0imi3eecit78rgu02to.apps.googleusercontent.com";

function LogoutButton(){
    const onLogoutSuccess=()=>{
        console.log("Log out successfull!");
    }
    return(
        <div id="signInButton">
            <GoogleLogin 
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onLogoutSuccess}
                className='googleSignOut'
            />
        </div>
    )
}
export default LogoutButton;