## REACT

- javascript library used to thats use to build ID
- uses **COMPONENTS**, they function as reusable js and html code. like lego
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
