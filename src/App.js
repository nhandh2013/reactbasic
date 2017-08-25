import React from "react";
import "./App.css";
import KanbanBoard from "./KanbanBoard";

let cardsList = [
    {
        id: 1,
        title: "Read the Book",
        description: "I should read the whole book",
        status: "in-progress",
        tasks: []
    },
    {
        id: 2,
        title: "Write some code",
        description: "Code along with the samples in the book",
        status: "todo",
        tasks: [
            {
                id: 1,
                name: "ContactList Example",
                done: true
            },
            {
                id: 2,
                name: "Kanban Example",
                done: false
            },
            {
                id: 3,
                name: "My own experiments",
                done: false
            },
        ]
    },
]
class HelloMessage extends React.Component {
    render() {
        return <KanbanBoard cards={cardsList}/>;
    }
}
export default HelloMessage;

// import React, { Component } from "react";
// import "./App.css";
// import Header  from "./component/Header";
// import Main from "./container/Main";
// import Footer from "./component/Footer";
// class Hello extends Component {
//     render() {
//         const word = 'a';
//         return (
//             <div>
//                 hello {word}
//             </div>
//         )
//     }
// }
// class GroceryList extends Component {
//     render() {
//         return (
//             <ul>
//                 <ListItem quality="1" name="Nhan" />
//                 <ListItem quality="3" name="abc" />
//                 <ListItem quality="5">test props children</ListItem>
//             </ul>
//         )
//     }
// }
// class ListItem extends Component {
//     render() {
//         return (
//             <li>
//                 {this.props.quality} x {this.props.children}
//             </li>
//         )
//     }
// }
// const App = () =>
//     <div className="App">
//         <GroceryList />
//         <Hello word="nhan"/>
//         <Header />
//         <Main />
//         <Footer />
//     </div>;
//
// export default App;
