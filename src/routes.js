import { Switch, Route } from 'react-router-dom'
import React from 'react'
// import Auth from './Components/Auth'
import dashboard from './Components/dashboard'
// import modal from './Components/modal'
// import Search from './Components/Search'




export default(
    <Switch>
        <Route exact path= '/' component={dashboard} />
        {/* <Route exact path= '/Profile' component={modal} /> */}
        {/* <Route exact path= '/Dashboard' component={Dashboard} /> */}
        {/* <Route exact path= '/Search' component={Search} /> */}
        {/* <Route exact path= '/Search2' component={Search} /> */}
    </Switch>

)