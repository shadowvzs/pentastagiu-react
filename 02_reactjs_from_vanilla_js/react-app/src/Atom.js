import React from 'react';
import AtomController from './AtomController';
import Canvas from './Canvas';

export default class Atom extends React.Component {
    
    constructor(props) {
        super(props);
        this.props = props;
        this.electrons = 5;
        this.speed = 5;
        this.radius = 100;
        this.state = { running: false };
        this.controllerHandler = this.controllerHandler.bind(this);
    }
    
    controllerHandler(e) {
        const t = e.currentTarget,
            type = t.dataset.type;
        if (type === "toggle") {
            this.setState( { running: !this.state.running } );
        } else if (type === "add" && this.electrons < 25) {
            this.electrons++;
        } else if (type === "remove" && this.electrons > 1) {
            this.electrons--;
        } else if (type === "speed" || type === "radius") {
            this[type] = t.value;
        }
        this.forceUpdate();
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.running !== this.state.running;
    }

    render() {
        const canvasProps = {
            running: this.state.running,
            speed: this.speed,
            radius: this.radius,
            electrons: this.electrons
        }

        return (
            <div className="atom">
                <AtomController running={this.state.running} handler={this.controllerHandler} />
                <Canvas {...canvasProps}/>
            </div>
        );
    }    
}