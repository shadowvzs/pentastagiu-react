import React from 'react';
import Service from './Service';
import Page from './Page';
import Atom from './Atom';

export default class Content extends React.Component {
    
    constructor(props) {
        super(props);
        this.props = props;
        this.loadPage = this.loadPage.bind(this); 
        this.content = "loading";
        this.setContent(props);
    }

    async loadPage(filename) {
        const content = await Service.loadContent("../pages/"+filename+".txt")
        this.content = (<Page name={filename} content={content}></Page>);
        this.forceUpdate();        
    }

    setContent(props) {
        const filename = props.content;
        if (filename !== "atom") {
            this.loadPage(filename);
        } else {
            this.content = (<Atom className="atom"/>)
            this.forceUpdate();
        }        
    }

    shouldComponentUpdate(nextProps, nextState) {
        const render = nextProps.content !== this.props.content;
        if (render) {
            this.setContent(nextProps);
        }
        return render;
    }

    render() {
        return (<div className="content"> {this.content} </div>)
    }
}
