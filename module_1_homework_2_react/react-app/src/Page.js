import React from 'react';

export default class Page extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const content = {__html: this.props.content};
        return (<div className={this.props.name} dangerouslySetInnerHTML={content} />)
    }    
    
}