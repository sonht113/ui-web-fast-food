import {Link} from 'react-router-dom';

import LoginForm from "../components/form-login/Login-Form";

function Login() {
    return(<>
        <LoginForm />
        <Link to="/sign-up" >Sign up</Link>
    </>)
}

export default Login;