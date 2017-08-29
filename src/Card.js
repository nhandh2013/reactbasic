import React from 'react';
import CheckList from './CheckList';
import marked from 'marked';

class Card extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            showDetails: false
        };
    }
    toggleDetails() {
        this.setState({showDetails: !this.state.showDetails});
    }
    render() {
        let cardDetails;
        let child1 = React.createElement('li', null, 'First Text Content');
        let child2 = React.createElement('li', null, 'Second Text Content');
        let child3 = React.DOM.form(
            {className: 'commentForm'},
            React.DOM.input({type: 'text', placeholder: 'name'}),
            React.DOM.input({type: 'text', placeholder: 'comment'}),
            React.DOM.input({type: 'submit', value: 'Post' })
        )
        let divStyle = {
            width: 200,
            height: 30,
            padding: 5,
            backgroundColor: '#ee9900'
        }
        let parent = React.createElement('ul', {className: 'my-list'}, child1);
        if (this.state.showDetails) {
            cardDetails = (
                <div className="card__details">
                    <span dangerouslySetInnerHTML={{__html:marked(this.props.description)}} />
                    <CheckList cardId={this.props.id} tasks={this.props.tasks} />
                </div>
            )
        }
        return (
            <div className="card">
                <div style={divStyle}>{parent}</div>
                <div className={this.state.showDetails ? "card__title card__title--is-open" : "card__title"} onClick={this.toggleDetails.bind(this)}>{this.props.title}</div>
                {cardDetails}
            </div>
        )
    }
}

export default Card;