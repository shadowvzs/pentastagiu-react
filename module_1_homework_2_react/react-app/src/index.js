import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import Content from './Content';


const root = document.getElementById('root');

class Root extends React.Component {

    constructor (props) {
        super(props);
        this.navList = [
            ["Home", "homepage"],
            ["Atom", "atom"],
        ];
        this.contentHandler = this.contentHandler.bind(this);
        this.state = { content: "homepage" };
    }

    contentHandler(e) {
        const content = e.target.dataset.content;
        if (content === this.state.content) {
            return;
        }
        this.setState({
            content: e.target.dataset.content
        });
    }    

    render() {
        return (
            <>
                <NavBar className="navbar" content={this.state.content} navList={this.navList} clickHandler={this.contentHandler}></NavBar>
                <Content className="content {this.state.content}" content={this.state.content}></Content>
            </>
        );
    }
}

ReactDOM.render(<Root />, root);