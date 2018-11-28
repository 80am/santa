import { Switch, Route } from 'react-router-dom'
import React from 'react'
// import Auth from './Components/Auth'
import dashboard from './Components/dashboard'
import Login from './Components/Login'
import kidprofile from './Components/kidprofile'
import kidLogin from './Components/kidLogin'
import kidpast from './Components/kidpast'
// import Auth from './Components/Auth'




export default(
    <Switch>
        <Route exact path= '/' component={Login} />
        <Route exact path= '/kidprofile' component={kidprofile} />
        <Route exact path= '/dashboard' component={dashboard} />
        <Route exact path= '/kidLogin' component={kidLogin} />
        <Route exact path= '/kidpast' component={kidpast} />
        {/* <Route exact path= '/Search2' component={Search} /> */}
    </Switch>

)