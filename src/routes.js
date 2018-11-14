import { Switch, Route } from 'react-router-dom'
import React from 'react'
// import Auth from './Components/Auth'
import dashboard from './Components/dashboard'
import Login from './Components/Login'
// import Search from './Components/Search'




export default(
    <Switch>
        <Route exact path= '/' component={Login} />
        {/* <Route exact path= '/Profile' component={Login} /> */}
        <Route exact path= '/dashboard' component={dashboard} />
        {/* <Route exact path= '/Search' component={Search} /> */}
        {/* <Route exact path= '/Search2' component={Search} /> */}
    </Switch>

)