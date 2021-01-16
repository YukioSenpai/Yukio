import React, { useContext } from 'react'
import { NavBar } from './components/navBar/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AdminPage } from './pages/AdminPage'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { myContext } from './context/Context'
import { Register } from './pages/Register'
import { Logout } from './pages/Logout'

export const App: React.FC = () => {
  const ctx = useContext(myContext)

  return <div>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact component={HomePage}></Route>
        {ctx ?
          <>
            {ctx.isAdmin === true ? <Route path='/admin' component={AdminPage}></Route> : null}
            <Route path='/profile' component={Profile}></Route>
            <Route path='/logout' component={Logout}></Route>
          </> :
          <>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
          </>
        }
      </Switch>
    </BrowserRouter>
  </div>
}