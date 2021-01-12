import React from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AdminPage } from './pages/AdminPage'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { Context } from './context/Context'

export const App: React.FC = () => {
  void 0
  return <div>
    <BrowserRouter>
      <Context>
        <NavBar />
        <Switch>
          <Route path='/' exact component={HomePage}></Route>
          <Route path='/admin' exact component={AdminPage}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/profile' exact component={Profile}></Route>
        </Switch>
      </Context>
    </BrowserRouter>
  </div>
}