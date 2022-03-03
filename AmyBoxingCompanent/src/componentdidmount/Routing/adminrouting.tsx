import { Route, Redirect } from 'react-router-dom';
import { isAuth } from '../helpers/auth';

const AdminRoute =  ({ component: Component, ...rest }:any) =>{ 
    return(
        <Route
        {...rest}
        render={props =>
            isAuth("role") === "admin" ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/webadminlogin',
                        state: { from: props.location }
                    }}
                />
            )
        }
          ></Route>
    )

}

export default AdminRoute;