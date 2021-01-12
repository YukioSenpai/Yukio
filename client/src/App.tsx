import React from 'react'
import { NavBar } from './Components/NavBar/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { AdminPage } from './Pages/AdminPage'
import { Login } from './Pages/Login'
import { Profile } from './Pages/Profile'

export const App: React.FC = () => {
  void 0
  return <BrowserRouter>
    <NavBar />
    <Switch>
      <Route path='/' exact component={HomePage}></Route>
      <Route path='/admin' exact component={AdminPage}></Route>
      <Route path='/login' exact component={Login}></Route>
      <Route path='/profile' exact component={Profile}></Route>
    </Switch>
  </BrowserRouter>
}