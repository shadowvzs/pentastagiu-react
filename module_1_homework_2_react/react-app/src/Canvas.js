import React from 'react';
import { Orbit } from './Orbit';
import { Electrons } from './Electron';

export default class Canvas extends React.Component {
    
    constructor(props) {
        super(props);
        this.props = props;
        this.fullCircle = Math.PI * 2;
        this.cX = 0;
        this.cY = 0;
        this.running = this.props.running;
        this.electrons = [];
        if (this.running) {
            this.updateSettings();
            this.updateCanvas(); 
        }
    }

    componentDidMount() {
        console.log('update');
        if (!this.ctx) {
            this.ctx = this.refs.canvas.getContext('2d');
            this.cX = ~~(this.refs.canvas.width / 2);
            this.cY = ~~(this.refs.canvas.height / 2);
        }
    }

    updateSettings() {
        this.radius = this.props.radius;
        this.speed = this.props.speed * this.fullCircle / 20;
        if (this.qty !== this.props.electrons) {
            this.qty = this.props.electrons;
            let i = 0;
            for (i =0; i< this.qty; i++ ) {
                this.electrons.push({size: 3, theta: Math.random() * 10});
            }
        }
        // i tryed with Array.fill but indexes linked together
        // this.electrons = Array(this.qty).fill({size: 3, theta: 0});
    }

    updateCanvas(dt = 1) {
        const {width,height} = this.ctx.canvas;
        const orbitData = { 
            angle: 0, 
            ctx: this.ctx, 
            cX: this.cX, 
            cY: this.cY, 
            speed: this.speed * dt, 
            radius: this.radius,
            size: 3,
        };       
        let rAng, i, part = 1 / this.qty;
        this.ctx.clearRect(0,0,width,height); 


        for (i = 0; i < this.qty; i++) {
            rAng = Math.PI * part * i;
            orbitData.angle = rAng;
            Orbit(orbitData);
            orbitData.electron = this.electrons[i];
            Electrons(orbitData);
        }
        if (this.props.running) {
            const now = +Date.now();
            const dt = (now - this.lastTime || 1) / 1000;
            this.lastTime = now; 
            window.requestAnimationFrame(this.updateCanvas.bind(this, dt));
        }
    }
 
    render() {
        this.updateSettings();
        if (this.props.running && !this.running) {
            this.updateCanvas();
            this.running = true;
        } else if (!this.props.running && this.running) {
            this.running = false;
        } 

        return (<canvas ref="canvas" width={500} height={500}/>);
    }
}