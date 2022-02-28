import axios from 'axios';
import React, { Component, useEffect ,useState} from 'react';
import { Route, Redirect } from 'react-router-dom';
// import { isAuth } from '../helpers/auth';

const AdminRoute =  ({ component: Component, ...rest }:any) =>{ 

    return(
        <Route
        {...rest}
        render={props =>
             true ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: props.location }
                    }}
                />
            )
        }
          ></Route>
    )

}

export default AdminRoute;