import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Login from './components/Login/Login';

function App() {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Nav/>
                <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/Login" render={() =><Login />}/>
                <Route path="/profile/:userId?" render={() => <Profile/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/Settings" component={Settings}/>
                <Route path="/Music" component={Music}/>
            </div>
        </BrowserRouter>
    );
}
export default App;
