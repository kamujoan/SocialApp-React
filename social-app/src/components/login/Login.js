import './Login.css'
import {auth} from '../../firebase'
import firebase from 'firebase'


export default function Login() {
  const signIn = () => {
const provider = new firebase.auth.GoogleAuthProvider()
auth.signInWithPopup(provider).then((result) => {
 window.location.href = "/"
});
//.catch((error) => alert(error.message))
  }
    return (
      <div className="login">
        <div className="loginWrapper">
          <div className="LoginLeft">
            <h3 className="loginLogo">Kamu</h3>
            <span className="loginDesc">Connect with us.</span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <button onClick={signIn} type="submit" className="loginButton">
                LogIn with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
