## REACT

- javascript library used to thats use to build ID
- uses **COMPONENTS**, they function as reusable js and html code. like lego. its a section of resuable jsx code. its a html like code that could contain js
- uses **JSX** (JavaScript XML) which allows you to write html like code within our js files.
- utilizes virtual dom

## Prerequisites

### NODE JS

- js backend runtime environment, lets us run js code outside a website

### Setting Up

1. Create/Find your file directory
2. cmd on the file path and put the following code:
   `npm create vite@latest`
3. (y) to proceed
4. Name your react app
5. Select React
6. select JavaScript
7. `cd name-of-the-app`
8. npm install
9. open VSCode code .
10. open terminal in cs code

### TO RUN THE APP:

11. `npm run dev` in cmd terminal

### project structures

#### node_modules

- contain projects and external libraries the project relies on (DONT DELETE)

#### public

- contains public assets, anything from the internet

#### src

- contain all the code

##### assets

- contains images and videos, similar to `public` folder but are bundled during the final project

##### index.css

- main css file for the project

##### main.jsx

- this function as the main js file, and works with component that are imported to the file

### index.html

- main entry point of the program which connects the main.jsx and index.css

### package.json

- contains the meta data of our project. ei. project name, version, build, etc.

## JSX

- primarily we will use function to create our component but you can also use obj or class though not recommended
-

### `return();`

- inside a function in a jsx file this is where you will put your html code

```bash

function Header(){

    return(
        <header>
            <h1>My Website</h1>
        </header>
    );
}

export default Header()

```

- when importing a component to another jsx file inside the `return()` this is what you'll do

```bash
import Header from "./Header.jsx"

function App() {
  return(
    <Header></Header>
    // you will basically use the imported function as an html tag
  );
}

export default App
```

- when exporting you can only return one value thats why we use `fragments` which are just empty tag that wraps your code. this allows multiple return (kinda)

```bash
function App() {

  return(
    <>
        <Header/>
        <Footer/>
    </>

  );
}

```

## `HTML TAGS`

### `nav`

- used for navigations and shit... more details in chat gpt lol

### `hr`

- self closing tag this creates a horizontal line

### `className=""`

- in REACT `class=""` is changed to `className=""`

### `placeholder image`

https://via.placeholder.com/size(150/200/etc)

### How to style reac components with CSS

1.  EXTERNAL STYLING

- it is styling normally used, basically on a one `.css` file you will every component there
  this is usually used for global styling but not preffered for big project as it could cause naming conflicts

2. MODULE STYLING

- creating a dedicated css style sheet specifically for a component
- jsx has a special function where we can import styles from a file using modules this is done in the `button` file
- this avoid naming conflicts as react makes an id

```bash
import styles from "./Button.module.css"

function Button(){

    return(
        <button className={styles.button}>Click me</button>
    );
}

```

- the `className` follows the format of `styles.(name-of-the-class)` or basically it calls a property of the object style

3. INLINE STYLING
   this is done by creating an object an putting all your css value as properties and string. you will also changed the naming convention to camelCase

```bash
function Button(){

    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    }

    return(
        <button className={styles.button}>Click me</button>
    );
}

```

## PROPS

- read-only properties that are shared between components. A parent component can send data to a child component
  `<Component key=value>` when you include a component within a parent, you can send that child component key value pairs

### creating a component with props

- the function component must have a parameter named `props`

```bash

function Student(props){
    return(
        <div>
            <p>Name: {props.name}</p>
        </div>
    )
}

export default Student
```

- when using the component you will then give the data by sending key value pait. it is done by adding the properties either through inline or objects

```bash
import Student from "./04-props/Student.jsx";

function App() {

  return(
    <>
    <Student name="Spongebob"></Student>
    </>

  );
}

```

### PROP TYPE

- a mechanism that ensures that the passed value is of the correct datatype
- this is imported

```bash
import PropTypes from 'prop-types'
import styles from './StudentCard.module.css'

function StudentCard(props){
    return(
        <div className={styles.studentCard}>
            <p>Name: {props.name}</p>
           <img className={styles.studentIMG} src={props.picture} alt="profile-picture" />
        </div>
    )
}
StudentCard.propTypes = {
    name: PropTypes.string,
    picture: PropTypes.string
}
```

### Default props

- default values for props in case they are not passed from the parent component

```bash
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
```
