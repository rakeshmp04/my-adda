import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './login-form.style.scss';

const Login = () =>{
    return(
        <Fragment>
             <div>
            <h2>Login to your account</h2>
            <form>
                <input type='email' placeholder='Enter your email' required/>
                <input type='password' placeholder='password' required />
                <input type='submit' value='take me in!' />
            </form>

            <p>Don't have an account?</p>
             <Link to='/register'>Create user</Link>
        </div>
        <Outlet />
        </Fragment>
       
    )
}

export default Login;