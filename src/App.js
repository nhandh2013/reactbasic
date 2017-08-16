import React from "react";
import "./App.css";
import Header  from "./component/Header";
import Main from "./container/Main";
import Footer from "./component/Footer";


const App = () =>
    <div className="App">
        <Header />
        <Main />
        <Footer />
    </div>;

export default App;
