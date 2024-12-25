import Header from "./01-react-introduction/Header.jsx"
import Footer from './01-react-introduction/Footer.jsx'
import Food from "./01-react-introduction/Food.jsx";
import Card from "./02-card-components/Card.jsx";
import Button from "./03-add-css-styles/Button.jsx";

function App() {

  return(
    <>
        <Header/>
        <Food/>
        <Card/>
        <Button/>
        <Card/>
        <Card/>
        <Footer/>
    </>

  );
}

export default App
