import PropTypes from 'prop-types'
import styles from './StudentCard.module.css'

function StudentCard(props){
    return(
        <div className={styles.studentCard}>
            <p>Name: {props.name}</p>
           <img className={styles.studentIMG} src={props.picture ? props.picture : "https://www.pngitem.com/pimgs/m/579-5798505_user-placeholder-svg-hd-png-download.png"} />
        </div>
    )
}
StudentCard.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string,
    id: PropTypes.string,
}
StudentCard.defaultProps = {
    name: "guest",
    img: 'https://via.placeholder.com/150',
    id: 'n/a'
}
export default StudentCard