import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './register-form.style.scss';

const Register = () => {
    return(
        <Fragment>
             <div>
                <form>
                    <input type='text' placeholder='Full name' required/>
                    <input type='email' placeholder='Email' required />
                    <input type='password' placeholder='Password' required />
                    <input type='submit' value='Register me!' />
                </form>
              <Outlet />
            </div>
            <Link to='/log-in'>Log in</Link>
        </Fragment>
       
      
    )
}

export default Register;