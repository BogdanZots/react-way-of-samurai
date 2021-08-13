import React, {Component} from 'react';
import Header from './components/Header/Header';
import Nav from './components//Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


function App(props) {
    console.log(props)
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <Route
                    exact
                    path="/dialogs"
                    render={()=><Dialogs dispatch={props.dispatch} state={props.state.dialogsPage}/>}/>
                <Route
                    path="/profile"
                    render={() => <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}/>}/>
                <Route path="/news" component={News}/>
                <Route path="/Settings" component={Settings}/>
                <Route path="/Music" component={Music}/>    
            </div>
        </BrowserRouter>
    );
}

export default App;
