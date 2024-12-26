import Header from "./01-react-introduction/Header.jsx"
import Footer from './01-react-introduction/Footer.jsx'
import Food from "./01-react-introduction/Food.jsx";
import Card from "./02-card-components/Card.jsx";
import Button from "./03-add-css-styles/Button.jsx";
import Student from "./04-props/Student.jsx";
import StudentCard from "./04-props/StudentCard.jsx";import UserGreeting from "./05-conditional-rendering/UserGreeting.jsx";

function App() {
    return (
      <>
      <Student/>
       <UserGreeting isLoggedIn={true} username="Klay"/>
       <UserGreeting isLoggedIn={false}/>
      </>
     
    );
  }

export default App
