import axios from 'axios';
import { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/userTypedSelector';

import { isAuth } from '../helpers/auth';

const AdminRoute =  ({ booleans, component: Component, ...rest  }:any) =>{ 

    const {users} = useTypedSelector(state => state.user)

  

  
 
    return(
        
        <Route
        {...rest}
        render={props =>
            true ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/adminlogin',
                        state: { from: props.location }
                    }}
                />
            )
        }
          ></Route>
    )

}

export default AdminRoute;