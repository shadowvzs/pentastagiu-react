export const Electrons = data => {
    const circle = Math.PI * 2;
    const { angle, ctx, cX, cY, radius, size, speed } = data;
    let x, y, nX, nY, theta = data.electron.theta;
    theta += speed;
    (theta > circle) && (theta = 0);
    x = radius*(Math.cos(theta) * 0.2);
    y = radius*(Math.sin(theta));
    nX = cX+x*Math.cos(angle)+y*Math.sin(angle);
    nY = cY-x*Math.sin(angle)+y*Math.cos(angle);
    ctx.beginPath();
    ctx.arc(~~nX, ~~nY, size, 0, circle);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.shadowColor = '#aaf';
    ctx.shadowBlur = 5;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;                    
    ctx.closePath();    
    ctx.stroke(); 
    data.electron.theta = theta;
}
