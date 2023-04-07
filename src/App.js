import './App.css';
import Navbar from './components/Navbar/Navbar';
import {lazy} from "react";
import { Suspense } from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Preloader from "./components/common/Preloader/Preloader";
import NotFound from "./components/common/Error404/NotFound";

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const Login = lazy(() => import("./components/Login/Login"));
const App = () => {

    return (
        <div className='app-wrapper'>

            <HeaderContainer/>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Suspense  fallback={<div><Preloader/></div>}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/profile" />} />
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
                        <Route path='*' element={<NotFound />} />

                    </Routes>
                </Suspense>
            </div>

        </div>
    )
};

export default App;
