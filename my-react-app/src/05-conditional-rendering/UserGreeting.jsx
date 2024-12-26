import style from './UserGreeting.module.css'
import PropTypes from 'prop-types'

function UserGreeting(props) {
    
    /* if(props.isLoggedIn){
        return <h2> Welcome {props.username}</h2>
    } else {
        return <h2> Please Log in to continue </h2>
    } */
    const welcomeMessage = <h2 className={style.welcomeMessage}> Welcome {props.username}</h2>;

    const loginPrompt = <h2 className={style.loginPrompt}> Please Log in to continue</h2>;

    return (props.isLoggedIn ?  welcomeMessage : loginPrompt)
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "guest",
}

export default UserGreeting