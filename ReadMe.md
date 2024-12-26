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

#### `.arrayOf(PropTypes.shape())`

- this is used to check the value of an array that has properties inside the `.shape()` method it will check each property you provide, like in the example below

```bash
List.proptypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        calories: PropTypes.number
    }))
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

## CONDITIONAL RENDERIG

- allows you to control what gets rendered in your application based on certain condition

heres an example using `if/else`:

```bash
function UserGreeting(props) {

    if(props.isLoggedIn){
        return <h2> Welcome {props.username}</h2>
    } else {
        return <h2> Please Log in to continue </h2>
    }
}

export default UserGreeting
```

heres an alternative using ternary:

```bash
function UserGreeting(props) {

    return (props.isLoggedIn ?  <h2> Welcome {props.username}</h2> :
                                <h2> Please Log in to continue</h2>)
}

export default UserGreeting
```

## renderiing list

- just some tricks on how to render an array
- note that react will want an id for each item in the array. just use a `random key id generator` for each item in the list or find an `external library` that generates key id

### sorting tricks

```bash
    //fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL
    //fruits.sort((a, b) => a.calories - b.calories) //NUMERIC
    //fruits.sort((a, b) => b.calories - a.calories) //REVERSE NUMERIC
```

for reference heres the array for the examples above:

```bash
    const fruits = [{
        id: "q8Ilr2UO2V",
        name: "apple",
        calories: 95
    }, {
        id: "50Se7ekKqt",
        name: "orange",
        calories: 45
    }, {
        id: "Y1kZTPbTkg",
        name: "banana",
        calories: 105
    }, {
        id: "j6D3dW2qFS",
        name: "coconut",
        calories: 159
    }, {
        id: "iVXGtpyeAH",
        name: "pineapple",
        calories: 37
    }]

```

### `filter()`

- its a built-in js code that filters an item in an array using the given criteria:
- inside the filter you will put a function and return the result it its false it will filter that item
  using the same array as above:

```bash
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)
    const listItems = lowCalFruits.map(fruit =>
    <li key={fruit.id}>{fruit.name}: &nbsp;
    <b>{fruit.calories}</b></li>
    );

    return(<ol>{listItems}</ol>)
```

display would be:

```bash
1. apple:  95
2. orange:  45
3. pineapple:  37
```

## click event

- an interaction when a user clicks on a specific element we can respond to clicks by passing a callback to the onclick event handler

in clicking events:
syntaxes:

```bash
onClick=""
onDoubleClick=""
```

```bash
<button onClick={handleClick2('Klay')}>Click Me ;></button>
```

- this will not work, this is because jsx is design to run the function. and in turn the onclick will not work. to fix this just wrap it up in an arrow funtion

```bash
<button onClick={() => handleClick2('Klay')}>Click Me ;></button>
```

- this will then work as expected

### event object

```bash
function ButtonClickEvent() {
    const handleClick = (e) => { console.log(e) }

 return(
    <button onClick={(e) => handleClick(e)}>Click Me ;></button>
 )
}

export default ButtonClickEvent
```

- this will `console.log()` all the properties in an event we can then through it changes some properties just be creative. NOTE: `e` is just short for `event`:

```bash
function ButtonClickEvent() {
    const handleClick = (e) => { e.target.textContent = "OUCH! ;[" }

 return(
    <button onClick={(e) => handleClick(e)}>Click Me ;></button>
 )
}

export default ButtonClickEvent
```

this will change the text of click me to ouch
