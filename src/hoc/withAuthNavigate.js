import {Navigate} from "react-router-dom";

export const withAuthNavigate = (Component) => {
    const NavigateComponent = (props) => {
        if (!props.isAuth) return <Navigate to={'/login'}/>
        return <Component{...props}/>
    }
    return NavigateComponent;
}