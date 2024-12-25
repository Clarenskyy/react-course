import styles from './StudentCard.module.css'

function StudentCard(props){
    return(
        <div className={styles.studentCard}>
            <p>Name: {props.name}</p>
           <img className={styles.studentIMG} src={props.picture} alt="profile-picture" />
        </div>
    )
}

export default StudentCard