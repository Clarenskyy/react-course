import StudentCard from "./StudentCard.jsx";
import { profile } from "../../data/profiles.js";

function Student() {function renderStudents(profile) {
    return profile.map((student) => (
      <StudentCard key={student.id} name={student.name} picture={student.picture} />
    ));
  }

  return (
    <>
      <div className="student-container">{renderStudents(profile)}</div>
    </>
  );}

  export default Student