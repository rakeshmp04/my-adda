import { Outlet, Link} from 'react-router-dom';
import { Fragment } from 'react';

const Navigation = () => {
    return(
       <Fragment>
        <div>
        <Link to='/'>MyAdda</Link>
        <Link to='/log-in'>LOG IN</Link>
        </div>
        <Outlet />
       
       </Fragment>
    )
}

export default Navigation;