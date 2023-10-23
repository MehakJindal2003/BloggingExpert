import { GoogleLogin } from 'react-google-login';

const clientId="447438300966-emcm2oet2a7af0imi3eecit78rgu02to.apps.googleusercontent.com";

function LoginButton(){
    const onSuccess=(res)=>{
        console.log("LOGIN SUCCESS! Current User: ",res.profileObj);
    }
    const onFailure=(res)=>{
        console.log("LOGIN FAILED! res: ",res);
    }
    return(
        <div id="signInButton">
            <GoogleLogin 
                clientId={clientId}
                buttonText="Sign In with Google"
                onSuccess={onSuccess}
                onFaliure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                className='googleSignIn'
            />
        </div>
    )
}

export default LoginButton;