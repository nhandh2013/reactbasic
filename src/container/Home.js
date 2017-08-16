import React, { Component } from 'react';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {active: false}
        this.dropDown = this.dropDown.bind(this);
    }
    dropDown() {
        this.setState( prevState => ({
            active: !prevState.active
        }));
        // this.setState({
        //     active: true
        // })
    }
    render() {
        return (
            <div>
                <h1>Hello Home</h1>
                <button onClick={this.dropDown} >Button show</button>
                <div className={this.state.active ? 'show' : 'hide'} >data show</div>
            </div>
        )
    }
}
export default Home;
