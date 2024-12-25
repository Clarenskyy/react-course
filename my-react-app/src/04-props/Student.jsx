
function Student(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
           <img src={props.picture} alt="profile-picture" />
        </div>
    )
}

export default Student