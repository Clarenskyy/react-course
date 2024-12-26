import Header from "./01-react-introduction/Header.jsx"
import Footer from './01-react-introduction/Footer.jsx' 
import Food from "./01-react-introduction/Food.jsx"; //lesson 1
import Card from "./02-card-components/Card.jsx"; //lesson 2
import Button from "./03-add-css-styles/Button.jsx"; //lesson 3
import Student from "./04-props/Student.jsx";
import StudentCard from "./04-props/StudentCard.jsx"; //lesson 4
import UserGreeting from "./05-conditional-rendering/UserGreeting.jsx"; //lesson 5
import List from "./06-rendering-list/List.jsx";
import {fruits, vegetables, EmptyArray} from '../data/06-rendering-list.js'// lesson 6
import ButtonClickEvent from "./07-click-events/ButtonClickEvent.jsx";
import ProfilePicture from './07-click-events/ProfilePicture.jsx'

function App() {

    return (
      <>
        <ProfilePicture />  
      </>
    );
  }

export default App
