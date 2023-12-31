// import React from "react"
// import ReactDOM from "react-dom/client"
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"

// Alternatively, we could use this: 
// ReactDOM.render(<hi>Hello, everyone</hi>, document.querySelector("#root"))

// ReactDOM.render(<hi>Hello, everyone</hi>, document.getElementById("root"))

// Try to write that 1-liner of React code again! This time, see if you can figure out how to render an <ul> with 2+ <li>s inside

// ReactDOM.render(<ul><li>Hello</li><li>Cat</li></ul>, document.querySelector("#root"))

// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// function MainContent(){
//     return (<hi>I'm learning React!</hi>)
// }

// Challenge: Create your own custom React component!
// Call it "MainContent", and have it return a simple
// h1 element that says "I'm learning React!"

// Afterward, render it below the Navbar (which
// you can do inside the ReactDOM.render call below)

// ReactDOM.render(<div>
//     <Navbar/>
//     <MainContent/>
// </div>, document.getElementById("root"))

// Example to show that vanilla JS is imperative (prescribe to the program what we want executed)
// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))
// Challenge - recreate the line of code in vanilla JS by crerating and appending an h1 to our div #root
// (without using innerHTML)
// - Create a new h1 element
// - Give it some textContent
// - Give it a class name "header"
// - append it as a child of the div #root

// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root").append(h1)

// You need to give the program step-by-step instructions 
// Create an element
// Add some text content
// Add a class name 
// Append it to the DOM



// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// <h1 class="header">

/*
{
    type: "h1", 
    key: null, 
    ref: null, 
    props: {className: "header", children: "This is JSX"}, 
    _owner: null, 
    _store: {}
}
 */
// This is just a JS object
// const element = <h1 className="header">This is JSX</h1>
// console.log(element)

// JSX
// ReactDOM.render(element, document.getElementById("root"))


// ReactDOM.render(
// <div>
// <h1 className="header">This is JSX</h1>
// <p>This is a paragraph</p>
// </div>,
// document.getElementById("root")
// )

//We can also write it like this

// const page = (<div>
// <h1 className="header">This is JSX</h1>
// <p>This is a paragraph</p>
// </div>)

// console.log(page)

// ReactDOM.render(page, document.getElementById("root"))

// Create a navbar in JSX:
// use the semantic `nav` element as the parent wrapper
// have an h1 element with the brand name of your "website"
// Insert an unordered list for the other nav elements 
// Inside the `ul`, have three `li's` for "Pricing", 
// "About", and "Contact"
// Don't worry about styling yet - it'll just be plain looking HTML for now 


// const navbar = (
//     <nav>
//         <h1>KittyCats</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navbar, document.getElementById("root"))
 
//React 18

// ReactDOM.createRoot(document.getElementById("root")).render(navbar)

// how it's usually written 

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(navbar)

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

// const paragraph = (
//     <div>
//         <h1>Susan's Interests</h1>
//         <ul>
//             <li>Programming</li>
//             <li>Pickleball</li>
//             <li>Coffee</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(paragraph, document.getElementById("root"))

// Custom Components 

// function TemporaryName() {
//    return (
//    <div>
//       <img src="./react-logo.png" width="40px"></img>
//       <h1>Fun facts about React</h1>
//       <ul>
//           <li>Was first released in 2013</li>
//           <li>Was originally created by Jordan Walke</li>
//           <li>Has well over 100K stars on Github</li>
//           <li>Is maintained by Facebook</li>
//           <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//   </div>
//    )
// }

// ReactDOM.render(<TemporaryName/>, document.getElementById("root"))


/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

// function ReasonsToLearnReact() {
//    return (
//       <div>
//          <h1>Reasons to learn React</h1>
//          <ol>
//             <li>Hireable skill</li>
//             <li>could be fun</li>
//             <li>A popular library</li>
//          </ol>
//       </div>
//    )
// }

// ReactDOM.render(<ReasonsToLearnReact/>, document.getElementById("root"))

/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */
// function Header() {
//    return (
//       <div>
//          <header>
//             <nav className="nav">
//                <img src="/static/img/react-logo.png" className="nav-logo"></img>
//                <ul className="nav-items">
//                   <li>Pricing</li>
//                   <li>About</li>
//                   <li>Contact</li>
//                </ul>
//             </nav>
//          </header>
//       </div>
//       )
//    }

// function Footer() {
//    return (
//    <footer>© 2023 Wu development. All rights reserved.</footer>   
//    )
// }
// function MainContent() {
//    return (
//       <div>
//             <h1>Reasons to learn React</h1>
//             <ol>
//                <li>Hireable skill</li>
//                <li>could be fun</li>
//                <li>A popular library</li>
//             </ol>
//       </div>
//    )
// }

// function Page() {
//       return (
//          <div>
//             <Header/>
//             <MainContent/>
//             <Footer/>
//          </div>
//       )
//    }
   
//    ReactDOM.render(<Page/>, document.getElementById("root"))

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

/**
Challenge: Project setup

- Create a `components` folder
- Create the following components in separate files inside
  the components folder.  In each one, just render an `h1` 
  with the name of the component (e.g. return <h1>Navbar goes here</h1>):
    - Navbar
    - Main
- Create an App component outside the components folder (sibling to
  the index.js file)
    - Have App render the Navbar and Main components
- Import and render the App component inside of index.js using ReactDOM
    - At this point you should have your "Navbar goes here" etc. showing up
      in the mini-browser.
- Go to Google fonts and get the "Inter" font with weights 400, 600, and 700.
  Put the links to those fonts ABOVE the style.css link in index.html (Use
  the `<link/>` elements instead of the @import or npm options for getting
  the fonts. You may need to do some extra research to figure out how this 
  works if you haven't done it before)
*/

ReactDOM.render(<App/>, document.getElementById("root"))