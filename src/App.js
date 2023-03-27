import React, {useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, Routes, useLocation, useNavigate, useParams} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = () => {


    return (
        <div className='app-wrapper'>

            <HeaderContainer/>
            <Navbar/>

            <div className='app-wrapper-content'>
                <Routes>
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

                </Routes>
            </div>

        </div>
    )
};

// export const withRouter = (Component) => {
//     function ComponentWithRouterProp(props) {
//         let location = useLocation();
//         let navigate = useNavigate();
//         let params = useParams();
//         return (
//             <Component
//                 {...props}
//                 router={{ location, navigate, params }}
//             />
//         );
//     }
//     return ComponentWithRouterProp;
// }

export default App;
