import s from './Start.module.css';
import {useNavigate} from "react-router-dom";

const Start = () => {
    let navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login')
    }

    return <div className={s.startPosition}>
        <h1 className={s.startTitle}>Hello! This is pet app social</h1>
        <p className={s.startText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        <button onClick={navigateToLogin} className={s.startButton}>Get started</button>
    </div>
}

export default Start;