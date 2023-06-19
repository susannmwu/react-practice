import React from "react"
import ReactDOM from "react-dom/client"

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


const navbar = (
    <nav>
        <h1>KittyCats</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))
 
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
//         <h1>Susan's page</h1>
//         <ul>
//             <li>Career</li>
//             <li>Hobbies</li>
//             <li>Contact</li>
//         </ul>
//     </div>
// )

// ReactDOM.append(paragraph, document.getElementById("root"))