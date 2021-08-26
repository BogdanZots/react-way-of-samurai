import React, {Component} from 'react';
import Header from './components/Header/Header';
import Nav from './components//Nav/Nav';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer'
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
    /*     const dispatch = useDispatch()
    const state = useSelector(state=>state) */
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <Route exact path="/dialogs" render={() =>< DialogsContainer />}/>
                <Route path="/profile" render={() => <Profile/>}/>
                <Route path="/users"  render={()=> <UsersContainer/>}/>
{/*                 <Route path="/news" component={News}/> */}
                <Route path="/Settings" component={Settings}/>
                <Route path="/Music" component={Music}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
