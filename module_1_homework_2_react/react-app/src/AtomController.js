import React from 'react';

export default class AtomController extends React.Component {
    
    constructor(props) {
        super(props);
        this.props = props;
       
    }
    render() {
        const handler = this.props.handler;
        const button = (name, type) => (
            <div className="button" data-type={type} onClick={handler}>
                <div className={name}></div>
            </div>
        );
        const input = (name, minMax, type) => (
            <input name={name} type="range" onChange={handler} min={minMax[0]} max={minMax[1]} data-type={type} /> 
        )
        const status = this.props.running ? "pause" : "play"; 

        return (
            <div className="control">
                <div className="row">
                    { button(status, "toggle") }
                    { button("plus", "add") }
                    { button("minus", "remove") }
                </div>
                <div className="row">
                    { input("speed", [0, 20], "speed") }
                    { input("radius", [1, 250], "radius") }
                </div>
            </div>
        );
    }    
}