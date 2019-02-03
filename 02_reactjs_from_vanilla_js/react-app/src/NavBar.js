import React from 'react';

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        const current = this.props.content;
        const navs = this.props.navList.map(([label, content]) => {
            const className = content === current ? "nav selected" : "nav";
            return (
                <div className={className} data-content={content} key={content} onClick={this.props.clickHandler}>
                    {label}
                </div>
            );
        })
        return (<div className="navbar">{navs}</div>);
    }
}