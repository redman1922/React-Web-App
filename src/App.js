import './App.css';
import Navbar from './components/Navbar/Navbar';
import {lazy} from "react";
import {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import NotFound from "./components/common/Error404/NotFound";
import Start from "./components/Start/Start";
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Login from "./components/Login/Login";

// const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
// const Login = lazy(() => import("./components/Login/Login"));
const App = () => {

    return (
        <div className='wrapperApp'>
            <div className='header'>
                <div className='headerCon'>
                    <HeaderContainer/>
                    <Navbar/>
                </div>
            </div>

            <div className='main'>
                {/*<Suspense fallback={<div><Preloader/></div>}>*/}
                    <Routes>
                        <Route path="/" element={<Start/>}/>
                        <Route
                            path='/login'
                            element={<Login/>}
                        />
                        <Route
                            path='/profile/*'
                            element={<ProfileContainer/>}
                        >
                            <Route path=":userId" element={<ProfileContainer/>}/>
                            <Route path="me" element={<ProfileContainer/>}/>
                        </Route>
                        <Route
                            path='/dialogs/*'
                            element={<DialogsContainer/>}
                        />
                        <Route
                            path='/users'
                            element={<UsersContainer/>}
                        />
                        <Route path='*' element={<NotFound/>}/>

                    </Routes>
                {/*</Suspense>*/}
            </div>
            <div className='footer'>
                <div className='footerCon'>
                    <Footer/>
                </div>

            </div>
        </div>
    )
};

export default App;
